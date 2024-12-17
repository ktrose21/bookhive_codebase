const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favoriteGenres: [String],
  joinedClubs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
});

module.exports = mongoose.model("User", UserSchema);