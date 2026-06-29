const mongoose = require("mongoose");

/**
 * Cart Item Schema (embedded within User Schema)
 */
const CartItemSchema = new mongoose.Schema({
  sku: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

/**
 * User Schema
 * Handles authentication data and client geo-location (x, y) coordinates.
 */
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Inventory Manager", "Sales Manager", "Administrator"],
      default: "Inventory Manager",
    },
    x: {
      type: Number,
      default: 0.0,
    },
    y: {
      type: Number,
      default: 0.0,
    },
    cart: [CartItemSchema], // Array of cart items representing the shopping cart
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", UserSchema);
