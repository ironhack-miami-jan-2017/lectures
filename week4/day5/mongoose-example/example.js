const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exampleApp');
  //                                       |
  //                                use exampleApp


const Cat = mongoose.model('Cat', { name: String });
  //   |
  //   --------------------
  //                      |
  // interacts with the "cats" collection


const kitty = new Cat({ name: 'Ginger' });

  //  db.cats.insertOne({ name: 'Ginger' })
  //              |
  //   ------------
  //   |
kitty.save((err) => {
  if (err) {
    throw err;
  }

  console.log(`meow ${kitty._id}`);
});


  // db.cats.find({}, { _id: 0, name: 1 })
  //           |
  //  ----------
  //  |
Cat.find({}, { _id: 0, name: 1 }, (err, cats) => {
  if (err) {
    throw err;
  }

  cats.forEach((oneCat) => {
    console.log(` --> cat: ${oneCat.name} ${oneCat._id}`);
  });
});


  // h4x
setTimeout(() => mongoose.disconnect(), 1000);
