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

router.get('/products/new', (req, res, next) => {
    // display views/products/new.ejs
  res.render('products/new');
});

router.post('/products', (req, res, next) => {
  const productInfo = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  };

  const theProduct = new Product(productInfo);

  theProduct.save((err) => {
    if (err) {
      next(err);
      return;
    }

      // redirect to http://localhost:3000/products
      //                                  ---------
      //                                       |
      //              --------------------------
      //              |
    res.redirect('/products');
  });
});

router.get('/products/:id', (req, res, next) => {
    //                 --
    //                  |
    //                  --------
    //                         |
  const productId = req.params.id;

    // db.products.findOne({ _id: productId })
  Product.findById(productId, (err, prodDoc) => {
    if (err) {
      next(err);
      return;
    }

    res.render('products/show', {
      product: prodDoc
    });
  });
});

router.get('/products/:id/edit', (req, res, next) => {
  const productId = req.params.id;

  Product.findById(productId, (err, prodDoc) => {
    if (err) {
      next(err);
      return;
    }

    res.render('products/edit', {
      product: prodDoc
    });
  });
});

router.post('/products/:id', (req, res, next) => {
  const productId = req.params.id;
  const productUpdates = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  };

    // db.products.updateOne({ _id: productId }, { $set: productUpdates })
  Product.findByIdAndUpdate(productId, productUpdates, (err, product) => {
    if (err) {
      next(err);
      return;
    }

      // redirect to http://localhost:3000/products
      //                                  ---------
      //                                       |
      //               -------------------------
      //               |
    res.redirect('/products');
  });
});

router.post('/products/:id/delete', (req, res, next) => {
  const productId = req.params.id;

    // db.products.deleteOne({ _id: productId })
  Product.findByIdAndRemove(productId, (err, product) => {
    if (err) {
      next(err);
      return;
    }

      // redirect to http://localhost:3000/products
      //                                  ---------
      //                                       |
      //               -------------------------
      //               |
    res.redirect('/products');
  });
});


module.exports = router;
