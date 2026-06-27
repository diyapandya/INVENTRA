/**
 * ReplenishStrategy (Abstract Base Class)
 * Interface for replenishing inventory at a dark store.
 */
class ReplenishStrategy {
  /**
   * @param {InventoryManager} mgr 
   * @param {Map<number, number>} items - Map of SKU -> quantity to replenish
   */
  replenish(mgr, items) {
    throw new Error("Method 'replenish()' must be implemented.");
  }
}

/**
 * ThresholdRepStrat
 * Replenishes stock only when it falls below a specific threshold.
 */
class ThresholdRepStrat extends ReplenishStrategy {
  /**
   * @param {number} threshold - Minimum stock level required
   */
  constructor(threshold = 10) {
    super();
    this.threshold = threshold;
  }

  /**
   * Replenishes stock for items if they are below the threshold.
   * @param {InventoryManager} mgr 
   * @param {Map<number, number>} items 
   */
  replenish(mgr, items) {
    items.forEach((qty, sku) => {
      const currentStock = mgr.checkStock(sku);
      if (currentStock < this.threshold) {
        // Replenish to bring it back to threshold + replenishment quantity
        mgr.addStock(sku, qty);
      }
    });
  }
}

/**
 * WeeklyRepStrat
 * Periodic weekly replenishment strategy.
 */
class WeeklyRepStrat extends ReplenishStrategy {
  /**
   * Replenishes stock for all given items unconditionally (scheduled).
   * @param {InventoryManager} mgr 
   * @param {Map<number, number>} items 
   */
  replenish(mgr, items) {
    items.forEach((qty, sku) => {
      // Periodic automatic restocking of items
      mgr.addStock(sku, qty);
    });
  }
}

module.exports = {
  ReplenishStrategy,
  ThresholdRepStrat,
  WeeklyRepStrat
};
