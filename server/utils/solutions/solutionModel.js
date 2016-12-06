var mongoose = require('mongoose');
var shortid = require('shortid');
mongoose.Promise = require('bluebird');

var solutionSchema = mongoose.Schema({
  userId: String,
  challengeId: String,
  solution: String,
  timeToSubmit: String
});

solutionSchema.pre('save', function(next) {
  this.id = shortid.generate();
  next();
});

module.exports = mongoose.model('Solution', solutionSchema);
