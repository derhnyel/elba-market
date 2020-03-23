const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

const Order = mongoose.model('orders', OrderSchema);
module.exports = Order;
