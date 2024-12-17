// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB Connected"));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to BookHive API");
});

const userRoutes = require("./routes/userRoutes");
const clubRoutes = require("./routes/clubRoutes");

app.use("/api/users", userRoutes);
app.use("/api/clubs", clubRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));