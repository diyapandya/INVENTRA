const express = require('express');
const router = express.Router();

const orderManager = require('../services/OrderManager');
const darkStoreManager = require('../services/DarkStoreManager');
const DarkStore = require('../models/DarkStore');
const InventoryManager = require('../services/InventoryManager');
const { DBInventoryStore } = require('../services/InventoryStore');
const { ThresholdRepStrat } = require('../services/ReplenishStrategy');
const User = require('../models/User');

// Seed a mock dark store in DarkStoreManager if empty
if (darkStoreManager.stores.length === 0) {
  const storeInstance = new DBInventoryStore();
  const managerInstance = new InventoryManager(storeInstance);
  managerInstance.addStock(101, 50); // Add stock for Product 101
  managerInstance.addStock(102, 50); // Add stock for Product 102
  
  const repStrat = new ThresholdRepStrat(10);
  const darkStore = new DarkStore("Downtown Dark Store", 10.0, 10.0, managerInstance, repStrat);
  
  darkStoreManager.addStore(darkStore);
}

/**
 * @route   GET /api/orders
 * @desc    Get order history
 */
router.get('/', (req, res) => {
  res.json(orderManager.orders);
});

/**
 * @route   POST /api/orders/place
 * @desc    Place a new order
 */
router.post('/place', (req, res) => {
  const { userName, items, x, y } = req.body; // items is array of {sku, quantity}
  
  if (!userName || !items || items.length === 0) {
    return res.status(400).json({ error: "Missing required order parameters." });
  }

  // Create temporary user, cart and place the order
  const user = new User(userName, x || 10.0, y || 10.0);
  
  items.forEach(item => {
    user.cart.addItem(parseInt(item.sku), parseInt(item.quantity));
  });

  const order = orderManager.placeOrder(user, user.cart, darkStoreManager);

  if (!order) {
    return res.status(400).json({ error: "Order placement failed. Check store stock levels." });
  }

  res.status(201).json({
    message: "Order placed successfully",
    order
  });
});

module.exports = router;
