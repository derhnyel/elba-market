const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    pictures: [
        {
            image: {
                type: String
            }
        }
    ],
    category: {
        type: String,//Schema.Types.ObjectId,
       // ref: 'categories'
    },
    shop: {
        type: String,//Schema.Types.ObjectId,
       // ref: 'shops'
    },
    rating: {
        type: Number,
    },
    reviews: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users',
                required: true
            },
            rating: {
                type: Number
            },
            comment: {
                type: String
            } 
        }
    ],
    status: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;
