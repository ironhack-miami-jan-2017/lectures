const express = require('express');

const Product = require('../models/product.js');

const router = express.Router();


router.get('/products', (req, res, next) => {
  Product.find((err, products) => {
    if (err) {
      next(err);
      return;
    }

      // display views/products/index.ejs
    res.render('products/index', {
      products: products
    });
  });
});

// router.get('/products/new', () => {});
// router.post('/products', () => {});

module.exports = router;
