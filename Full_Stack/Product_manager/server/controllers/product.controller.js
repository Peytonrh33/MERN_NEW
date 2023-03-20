const {Product} = require('../models/product.model')



module.exports.index = (req, res) =>{
    res.json({
        message: "Hello I'm here"
    });
}

module.exports.createProduct = (req, res) =>{
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}