/**
 * DarkStore Model
 * Represents a localized fulfillment warehouse (micro-fulfillment center).
 */
class DarkStore {
  /**
   * @param {string} name - Name of the dark store
   * @param {number} x - Latitude / X-coordinate
   * @param {number} y - Longitude / Y-coordinate
   * @param {InventoryManager} mgr - The inventory manager associated with the store
   * @param {ReplenishStrategy} rs - The replenishment strategy for this store
   */
  constructor(name, x, y, mgr, rs) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.mgr = mgr;
    this.rs = rs;
  }

  /**
   * Returns list of all products in this dark store's inventory
   * @returns {Array<Product>}
   */
  getAllProducts() {
    if (this.mgr && this.mgr.getAvailableProducts) {
      return this.mgr.getAvailableProducts();
    }
    return [];
  }

  /**
   * Calculates euclidean distance to user coordinates
   * @param {number} ux - User X coordinate
   * @param {number} uy - User Y coordinate
   * @returns {number}
   */
  distanceTo(ux, uy) {
    const dx = this.x - ux;
    const dy = this.y - uy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Runs the replenishment routine for specified items using this store's strategy
   * @param {Map<number, number>} items - Map of SKU to quantity to replenish
   */
  runReplenish(items) {
    if (this.rs && this.rs.replenish) {
      this.rs.replenish(this.mgr, items);
    }
  }
}

module.exports = DarkStore;
