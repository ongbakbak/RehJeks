var mongoose = require('mongoose');

var solutionSchema = mongoose.Schema({
  userId: String,
  challengeId: String,
  solution: String,
  timeToSubmit: String
});

module.exports = mongoose.model('Solution', solutionSchema);
