var mongoose = require('mongoose');
var shortid = require('shortid');
mongoose.Promise = require('bluebird');

var userSchema = mongoose.Schema({
  id: String,
  username: String,
  pw: String
});

userSchema.pre('save', function(next) {
  this.id = shortid.generate();
  next();
});

module.exports = mongoose.model('User', userSchema);
