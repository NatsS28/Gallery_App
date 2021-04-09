const { response } = require('express');
const User = require('../models/user');

const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const uploadImage = (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path
    });

    User
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created product successfully",
                createdProduct: {
                    name: result.name,
                    price: result.price,
                    _id: result._id,
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })

}

module.exports = {
    uploadImage
}


