const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

// Get all products
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 599,
    },
    {
      id: 2,
      name: "Shoes",
      price: 1499,
    },
  ];

  res.json({
    success: true,
    products,
  });
});

// Get single product
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;

  res.json({
    success: true,
    message: `Product ID is ${productId}`,
  });
});

// Create product
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    product: {
      name,
      price,
    },
  });
});

// Update product
app.put("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;

  res.json({
    success: true,
    message: "Product updated successfully",
    product: {
      id: productId,
      name,
      price,
    },
  });
});

// Delete product
app.delete("/api/products/:id", (req, res) => {
  const productId = req.params.id;

  res.json({
    success: true,
    message: `Product ${productId} deleted successfully`,
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});