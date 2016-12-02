var mongoose = require('mongoose');

var challengeSchema = new mongoose.Schema('Challenge', {
  id: String,
  userId: String,
  title: String,
  prompt: String,
  text: String,
  difficulty: String,
  expected: [String],
  answer: String,
  cheats: [String]
})

module.exports = mongoose.model('Challenge', challengeSchema);
