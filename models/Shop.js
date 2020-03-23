const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ShopSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

const Shop = mongoose.model('shops', ShopSchema);
module.exports = Shop;
