var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  id: String,
  username: String,
  pw: String
});

module.exports = mongoose.model('User', userSchema);
