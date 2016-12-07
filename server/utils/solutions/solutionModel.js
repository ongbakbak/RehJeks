var mongoose = require('mongoose');
var shortid = require('shortid');
mongoose.Promise = require('bluebird');

var solutionSchema = mongoose.Schema({
  userId: String,
  challengeId: String,
  solution: String,
  timeToSubmit: String
},
{
  timestamps: true
});

solutionSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = shortid.generate();
  }
  next();
});

module.exports = mongoose.model('Solution', solutionSchema);
