var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var userSchema = mongoose.Schema({
  id: String,
  username: String,
  pw: String
});

module.exports = mongoose.model('User', userSchema);
