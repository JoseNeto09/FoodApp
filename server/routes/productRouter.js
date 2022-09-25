const express = require('express');


const router = express.Router();


const Product = require('../models/ProductModel')

router.get('/products', async (req, res) => {
    try{
        const products = await Product.fin()
        res.status(200).send({ data: products})
    } catch(err){
        res.status.send(400).send({ error: err})
    }
})


module.exports = router