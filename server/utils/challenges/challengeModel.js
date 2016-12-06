var mongoose = require('mongoose');
var shortid = require('shortid');
mongoose.Promise = require('bluebird');


var challengeSchema = mongoose.Schema({
  id: String,
  userId: String,
  title: String,
  prompt: String,
  text: String,
  difficulty: String,
  expected: [String],
  answer: String,
  cheats: [String]
});

challengeSchema.pre('save', function(next) {
  this.id = shortid.generate();
  next();
});

module.exports = mongoose.model('Challenge', challengeSchema);
