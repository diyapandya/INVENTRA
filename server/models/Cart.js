/**
 * Cart Model
 * Holds items selected by a user before placing an order.
 */
class Cart {
  constructor() {
    // Stores items as a map of { sku: quantity }
    this.items = new Map();
  }

  /**
   * Adds a product SKU with a specified quantity to the cart.
   * @param {number} sku 
   * @param {number} q - quantity
   */
  addItem(sku, q) {
    if (this.items.has(sku)) {
      this.items.set(sku, this.items.get(sku) + q);
    } else {
      this.items.set(sku, q);
    }
  }

  /**
   * Retrieves all items currently in the cart.
   * @returns {Array<{sku: number, quantity: number}>}
   */
  getItems() {
    const itemList = [];
    this.items.forEach((quantity, sku) => {
      itemList.push({ sku, quantity });
    });
    return itemList;
  }

  /**
   * Calculates the total cost of the items in the cart.
   * Note: In a full system, this would lookup actual prices from the database.
   * @returns {number}
   */
  getTotal() {
    // Return a basic mock total for demonstration, or default to 0
    let total = 0;
    // Real logic would do: total += quantity * product.price
    return total;
  }
}

module.exports = Cart;
