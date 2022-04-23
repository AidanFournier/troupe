const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: false
  }
});

const User = mongoose.model('user', userSchema);
User.plugin(uniqueValidator);

module.exports = User;
