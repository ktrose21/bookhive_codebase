const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register User
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, favoriteGenres } = req.body;
    const newUser = new User({ name, email, password, favoriteGenres });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;