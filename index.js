const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/books", bookRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Library Management System API");
});

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
