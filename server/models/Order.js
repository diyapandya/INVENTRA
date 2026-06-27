const mongoose = require('mongoose');

/**
 * Order Schema
 * Tracks finalized transaction lists, delivery states, and payment sum.
 */
const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    sku: { type: Number, required: true },
    quantity: { type: Number, required: true }
  }],
  partners: [{
    name: { type: String, default: 'Rider-1' }
  }],
  total: {
    type: Number,
    required: true,
    default: 0.0
  },
  status: {
    type: String,
    enum: ['Pending', 'Assigned', 'Picked Up', 'Delivered', 'Cancelled'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
