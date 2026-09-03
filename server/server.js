const express = require("express");
const cors = require("cors");
const colors = require("colors")
const morgan = require("morgan")


const app = express();
const PORT = process.env.PORT || 5000;
// dotenv
require("dotenv").config();


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


// route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});


// Server

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.bgCyan.white);
});