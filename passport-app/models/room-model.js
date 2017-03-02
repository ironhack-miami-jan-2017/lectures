const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const roomSchema = new Schema({
  name: { type: String, required: true },
  desc: String,
  picture: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Room = mongoose.model('Room', roomSchema);


module.exports = Room;
