const Order = require('../models/Order');

/**
 * OrderManager (Singleton)
 * Processes checkouts and assigns delivery partners for orders.
 */
class OrderManager {
  constructor() {
    if (OrderManager.instance) {
      return OrderManager.instance;
    }
    this.orders = []; // List of all placed orders
    this.nextOrderId = 1;
    OrderManager.instance = this;
  }

  /**
   * Places an order for a user based on their cart items.
   * @param {User} user 
   * @param {Cart} cart 
   * @param {DarkStoreManager} darkStoreMgr 
   * @returns {Order|null} The placed order object or null if failed
   */
  placeOrder(user, cart, darkStoreMgr) {
    const items = cart.getItems();
    if (items.length === 0) return null;

    // 1. Locate the nearest DarkStore that has stock for these items
    const nearbyStores = darkStoreMgr.getNearbyStores(user.x, user.y, 100); // 100km radius
    let chosenStore = null;

    for (const store of nearbyStores) {
      let hasAllItems = true;
      for (const item of items) {
        if (store.mgr.checkStock(item.sku) < item.quantity) {
          hasAllItems = false;
          break;
        }
      }
      if (hasAllItems) {
        chosenStore = store;
        break;
      }
    }

    // Fallback: If no single store has everything, pick the closest one
    if (!chosenStore && nearbyStores.length > 0) {
      chosenStore = nearbyStores[0];
    }

    if (!chosenStore) {
      console.log("No store found to fulfill the order.");
      return null;
    }

    // 2. Deduct stock from the chosen store
    items.forEach(item => {
      chosenStore.mgr.removeStock(item.sku, item.quantity);
    });

    // 3. Estimate total and assign a default delivery partner
    const total = cart.getTotal();
    const DeliveryPartner = require('../models/DeliveryPartner');
    const partner = new DeliveryPartner("Rider-1");

    // 4. Create and record the order
    const order = new Order(
      this.nextOrderId++,
      user,
      items,
      [partner],
      total
    );

    this.orders.push(order);
    return order;
  }
}

// Export singleton instance
const instance = new OrderManager();
module.exports = instance;
