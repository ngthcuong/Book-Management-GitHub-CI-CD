const express = require("express");
const bodyParser = require("body-parser");
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

// No database connection needed as we're using mock data

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
