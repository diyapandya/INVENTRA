/**
 * InventoryManager
 * Coordinates high-level stock management using an underlying InventoryStore implementation.
 */
class InventoryManager {
  /**
   * @param {InventoryStore} store 
   */
  constructor(store) {
    this.store = store;
  }

  /**
   * Adds stock quantity to store
   * @param {number} sku 
   * @param {number} q 
   */
  addStock(sku, q) {
    // If product is known in store, add stock
    // Since we don't have the original product object here, we check checkStock/addProduct
    if (this.store) {
      // Find product object first or create placeholder if not present
      let products = this.store.listAllProducts();
      let product = products.find(p => p.sku === sku);
      if (!product) {
        const { ProductFactory } = require('../models/Product');
        product = ProductFactory.createProduct(sku);
      }
      this.store.addProduct(product, q);
    }
  }

  /**
   * Removes stock quantity from store
   * @param {number} sku 
   * @param {number} q 
   */
  removeStock(sku, q) {
    if (this.store) {
      this.store.removeProduct(sku, q);
    }
  }

  /**
   * Checks current stock level
   * @param {number} sku 
   * @returns {number}
   */
  checkStock(sku) {
    if (this.store) {
      return this.store.checkStock(sku);
    }
    return 0;
  }

  /**
   * Retrieves list of all products that have positive stock levels
   * @returns {Array<Product>}
   */
  getAvailableProducts() {
    if (this.store) {
      const allProducts = this.store.listAllProducts();
      return allProducts.filter(p => this.store.checkStock(p.sku) > 0);
    }
    return [];
  }
}

module.exports = InventoryManager;
