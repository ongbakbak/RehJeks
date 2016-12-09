var mongoose = require('mongoose');
var shortid = require('shortid');
mongoose.Promise = require('bluebird');

//requiring passport local mongoose for authentication
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
  id: String,
  username: String,
  pw: String
},
  {
    timestamps: true
  });

userSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = shortid.generate();
  }
  next();
});

//adding plugin to authenticate
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
