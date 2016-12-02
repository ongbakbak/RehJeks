var mongoose = require('mongoose');

var userSchema = new mongoose.Schema('User', {
  id: String,
  username: String,
  pw: String
})

module.exports = mongoose.model('User', userSchema);
