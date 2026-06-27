const express = require("express");
const router = express.Router();
const { DBInventoryStore } = require("../services/InventoryStore");
const InventoryManager = require("../services/InventoryManager");
const { ThresholdRepStrat } = require("../services/ReplenishStrategy");
const { authenticate } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Set up mock backend inventory instances
const store = new DBInventoryStore();
const manager = new InventoryManager(store);

// Seed with some initial stock values
manager.addStock(101, 15);
manager.addStock(102, 5); // Low stock (below threshold of 10)
manager.addStock(103, 50);

/**
 * @route   GET /api/inventory
 * @desc    Get stock levels for all products
 */
router.get(
  "/",
  authenticate,
  authorize(["Administrator", "Inventory Manager"]),
  (req, res) => {
    const products = store.listAllProducts();
    const inventoryStatus = products.map((p) => ({
      sku: p.sku,
      name: p.name,
      stock: store.checkStock(p.sku),
      reorderLevel: 10,
    }));
    res.json(inventoryStatus);
  },
);

/**
 * @route   POST /api/inventory/add
 * @desc    Add stock to a product
 */
router.post(
  "/add",
  authenticate,
  authorize(["Administrator", "Inventory Manager"]),
  (req, res) => {
    const { sku, quantity } = req.body;
    if (!sku || !quantity) {
      return res.status(400).json({ error: "SKU and quantity are required." });
    }

    manager.addStock(parseInt(sku), parseInt(quantity));
    res.json({
      sku: parseInt(sku),
      newStock: manager.checkStock(parseInt(sku)),
    });
  },
);

/**
 * @route   POST /api/inventory/replenish
 * @desc    Trigger replenishment algorithm
 */
router.post(
  "/replenish",
  authenticate,
  authorize(["Administrator", "Inventory Manager"]),
  (req, res) => {
    // Define replenishment needs
    const replenishmentNeeds = new Map([
      [101, 10],
      [102, 20],
      [103, 10],
    ]);

    // Use threshold replenish strategy (threshold = 10)
    const repStrat = new ThresholdRepStrat(10);
    repStrat.replenish(manager, replenishmentNeeds);

    // Return the new inventory levels
    const products = store.listAllProducts();
    const finalStock = products.map((p) => ({
      sku: p.sku,
      name: p.name,
      stock: store.checkStock(p.sku),
    }));

    res.json({
      message: "Replenishment strategy executed successfully.",
      inventory: finalStock,
    });
  },
);

module.exports = router;
