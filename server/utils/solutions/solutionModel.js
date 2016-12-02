var mongoose = require('mongoose');

var solutionSchema = new mongoose.Schema('Solution', {
  userId: String,
  challengeId: String,
  solution: String,
  timeToSubmit: String
})

module.exports = mongoose.model('Solution', solutionSchema);
