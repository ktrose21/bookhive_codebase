const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  books: [String],
  discussions: [{
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  }],
});

module.exports = mongoose.model("Club", ClubSchema);