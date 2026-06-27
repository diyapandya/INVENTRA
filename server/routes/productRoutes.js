const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

let products = [
  {
    sku: 101,
    name: "Wireless Mouse",
    price: 29.99,
    category: "Electronics",
    stock: 15,
  },
  {
    sku: 102,
    name: "Keyboard",
    price: 49.99,
    category: "Electronics",
    stock: 8,
  },
  {
    sku: 103,
    name: "Water Bottle",
    price: 15.5,
    category: "Home & Kitchen",
    stock: 50,
  },
];

/**
 * @route   GET /api/products
 * @desc    Get all products
 */
router.get("/", authenticate, (req, res) => {
  res.json(products);
});

/**
 * @route   POST /api/products
 * @desc    Add a new product
 */
router.post(
  "/",
  authenticate,
  authorize(["Administrator", "Inventory Manager"]),
  (req, res) => {
    const { sku, name, price, category } = req.body;

    if (!sku || !name || !price) {
      return res.status(400).json({ error: "Missing product details." });
    }

    const existingProduct = products.find((p) => p.sku === parseInt(sku));
    if (existingProduct) {
      return res
        .status(400)
        .json({ error: "Product with this SKU already exists." });
    }

    const newProduct = {
      sku: parseInt(sku),
      name,
      price: parseFloat(price),
      category: category || "Uncategorized",
      stock: 0,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  },
);

/**
 * @route   DELETE /api/products/:sku
 * @desc    Delete a product
 */
router.delete(
  "/:sku",
  authenticate,
  authorize(["Administrator"]),
  (req, res) => {
    const sku = parseInt(req.params.sku);
    const initialLength = products.length;
    products = products.filter((p) => p.sku !== sku);

    if (products.length === initialLength) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ success: true, message: "Product deleted" });
  },
);

module.exports = router;
