/**
 * InventoryStore (Abstract Base Class)
 * Interface for inventory storage providers.
 */
class InventoryStore {
  addProduct(product, q) {
    throw new Error("Method 'addProduct()' must be implemented.");
  }
  removeProduct(sku, q) {
    throw new Error("Method 'removeProduct()' must be implemented.");
  }
  checkStock(sku) {
    throw new Error("Method 'checkStock()' must be implemented.");
  }
  listAllProducts() {
    throw new Error("Method 'listAllProducts()' must be implemented.");
  }
}

/**
 * DBInventoryStore
 * Concrete implementation of InventoryStore storing data in local memory maps.
 */
class DBInventoryStore extends InventoryStore {
  constructor() {
    super();
    this.stocks = new Map();   // map<sku (int), quantity (int)>
    this.products = new Map(); // map<sku (int), Product (object)>
  }

  /**
   * Add a product and stock quantity to the store.
   * @param {Product} product 
   * @param {number} q 
   */
  addProduct(product, q) {
    const sku = product.sku;
    this.products.set(sku, product);
    const currentQty = this.stocks.get(sku) || 0;
    this.stocks.set(sku, currentQty + q);
  }

  /**
   * Remove stock quantity for a product.
   * @param {number} sku 
   * @param {number} q 
   */
  removeProduct(sku, q) {
    if (!this.stocks.has(sku)) return;
    const currentQty = this.stocks.get(sku);
    const newQty = Math.max(0, currentQty - q);
    this.stocks.set(sku, newQty);
  }

  /**
   * Check stock level for a SKU.
   * @param {number} sku 
   * @returns {number} Quantity remaining
   */
  checkStock(sku) {
    return this.stocks.get(sku) || 0;
  }

  /**
   * List all products in the database.
   * @returns {Array<Product>}
   */
  listAllProducts() {
    return Array.from(this.products.values());
  }
}

module.exports = { InventoryStore, DBInventoryStore };
