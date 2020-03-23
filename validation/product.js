const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.stock = !isEmpty(data.stock) ? data.stock : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.category = !isEmpty(data.category) ? data.category : '';
    data.shop = !isEmpty(data.shop) ? data.shop : '';

    if (!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = 'Product Name must be between 2 and 30 characters';
    }

    if (!Validator.isLength(data.description, {min: 4, max: 30})){
        errors.description = 'Product description must be between 4 and 30 characters';
    }

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Product Name field is required';
    }

    if(Validator.isEmpty(data.price)) {
        errors.price = 'Product price field is required';
    }

    if(Validator.isEmpty(data.stock)) {
        errors.stock = 'Product Stock field is required';
    }

    if(Validator.isEmpty(data.description)) {
        errors.description = 'Product description field is required';
    }

    if(Validator.isEmpty(data.category)) {
        errors.category = 'Product category field is required';
    }

    if(Validator.isEmpty(data.shop)) {
        errors.shop = 'Product shop field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
