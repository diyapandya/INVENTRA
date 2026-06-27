/**
 * DarkStoreManager (Singleton)
 * Coordinates registration and spatial lookup of local DarkStore warehouses.
 */
class DarkStoreManager {
  constructor() {
    if (DarkStoreManager.instance) {
      return DarkStoreManager.instance;
    }
    this.stores = []; // Array of DarkStore instances
    DarkStoreManager.instance = this;
  }

  /**
   * Adds a new DarkStore to the registry
   * @param {DarkStore} store 
   */
  addStore(store) {
    this.stores.push(store);
  }

  /**
   * Finds stores within a maximum distance maxD from user coordinates (ux, uy)
   * @param {number} ux 
   * @param {number} uy 
   * @param {number} maxD 
   * @returns {Array<DarkStore>}
   */
  getNearbyStores(ux, uy, maxD) {
    return this.stores.filter(store => {
      const distance = store.distanceTo(ux, uy);
      return distance <= maxD;
    });
  }
}

// Export singleton instance
const instance = new DarkStoreManager();
module.exports = instance;
