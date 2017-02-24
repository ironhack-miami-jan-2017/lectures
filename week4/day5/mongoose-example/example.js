const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/exampleApp');
  //                                       |
  //                                use exampleApp

const catSchema = new Schema({
  name: String,
  color: String,
  age: Number,
  birthday: Date
});

const Cat = mongoose.model('Cat', catSchema);
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
