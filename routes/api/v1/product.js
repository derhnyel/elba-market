const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const passport = require('passport');
dotenv.config();

// Load Input Validation
const validateProductInput = require('../../../validation/product');

// Load User Model
const User = require('../../../models/User');

// Load Product Model
const Product = require('../../../models/Product');


// @route   GET api/v1/product/test
// @desc    Tests products route
// @access  public
router.get('/test', (req, res) => res.json({msg: 'Products Works!'}));

// @route   GET api/v1/product/test
// @desc    Create a product
// @access  private
router.post('/add', passport.authenticate('jwt', {session: false}), (req, res) => {
    // Validate the inputs
    const {errors, isValid} = validateProductInput(req.body);
    
    // Check Validation Errors

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newProduct = new Product(req.body);
    newProduct.save()
        .then(product => res.json(product))
        .catch(err => res.json(err));

    console.log(req.body);
})

// @route   GET api/v1/product/all
// @desc    Get all products
// @access  public
router.get('/all', (req, res) => {
    Product.find()
        .then(products => res.json(products));
});

// @route   GET api/v1/product/id/:id
// @desc    Get a product by id
// @access  public
router.get('/id/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(products => res.json(products));
});

// delete a product

// get a product

// get all products

module.exports = router;