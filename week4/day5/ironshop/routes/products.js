const express = require('express');

const router = express.Router();


router.get('/products', (req, res, next) => {
  res.send('Products list page');
});

// router.get('/products/new', () => {});
// router.post('/products', () => {});

module.exports = router;
