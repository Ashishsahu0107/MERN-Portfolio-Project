const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
  profileImage: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      link: String
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
