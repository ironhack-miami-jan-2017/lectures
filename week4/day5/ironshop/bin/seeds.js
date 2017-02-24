const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ironshopDev');

const Product = require('../models/product.js');


const products = [
  {
    name: 'Nintendo Switch',
    price: 299,
    imageUrl: 'http://media.nintendo.com/nintendo/cocoon/switch-static-pages/switch/etRgxnAu0zRX4bmWnt9K628wG7YQUI6t/images/switch/home/bundle1.jpg',
    description: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
  },
  {
    name: '20" monitor',
    price: 249.99,
    imageUrl: 'http://i.imgur.com/5ICGeY0.jpg',
    description: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
  },
  {
    name: 'Soylent',
    price: 54.99,
    imageUrl: 'http://media.gq.com/photos/57c6f39209f7003c4afd2c4d/3:2/w_800/drink_gallery5.546e2142f4c6.jpg',
    description: 'You never have to leave your computer! All you can eat nutrition!',
  }
];

  // db.products.insertMany([...])
  //                  |
  //      -------------
  //      |
Product.create(products, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((oneProduct) => {
    console.log(`${oneProduct.name} ${oneProduct._id}`);
  });

  mongoose.disconnect();
});
