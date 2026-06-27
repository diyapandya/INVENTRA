const mongoose = require("mongoose");

/**
 * Product Schema
 * Represents a single inventory product stored in MongoDB.
 */
const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      default: "General",
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt timestamps
  },
);

const ProductModel = mongoose.model("Product", ProductSchema);

/**
 * ProductFactory
 * Factory class to create Product instances.
 */
class ProductFactory {
  static createProduct(
    sku,
    name = "Unknown Product",
    price = 0,
    category = "General",
    stock = 0,
  ) {
    return new ProductModel({
      sku,
      name,
      price,
      category,
      stock,
    });
  }
}

module.exports = ProductModel;
module.exports.ProductFactory = ProductFactory;
