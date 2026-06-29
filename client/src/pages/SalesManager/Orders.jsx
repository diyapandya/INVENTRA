import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { FaShoppingCart, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      date: "2026-06-29",
      customer: "ABC Store",
      product: "Wireless Mouse",
      qty: 10,
      amount: 450,
      status: "Completed",
    },
    {
      id: "ORD-002",
      date: "2026-06-29",
      customer: "XYZ Mart",
      product: "Keyboard",
      qty: 5,
      amount: 320,
      status: "Pending",
    },
    {
      id: "ORD-003",
      date: "2026-06-28",
      customer: "Quick Shop",
      product: "Monitor",
      qty: 2,
      amount: 680,
      status: "Completed",
    },
    {
      id: "ORD-004",
      date: "2026-06-28",
      customer: "Retail Hub",
      product: "USB Hub",
      qty: 15,
      amount: 215,
      status: "Pending",
    },
    {
      id: "ORD-005",
      date: "2026-06-27",
      customer: "Store Plus",
      product: "Headphones",
      qty: 8,
      amount: 890,
      status: "Completed",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    customer: "",
    product: "",
    qty: "",
    amount: "",
    status: "Pending",
  });

  const handleAddOrder = () => {
    if (
      formData.customer &&
      formData.product &&
      formData.qty &&
      formData.amount
    ) {
      const newOrder = {
        ...formData,
        id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
        date: new Date().toISOString().split("T")[0],
      };
      setOrders([newOrder, ...orders]);
      setFormData({
        id: "",
        date: "",
        customer: "",
        product: "",
        qty: "",
        amount: "",
        status: "Pending",
      });
      setShowForm(false);
    }
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="orders-container">
      <Navbar />
      <div className="orders-layout">
        <Sidebar />
        <main className="orders-main">
          <header className="orders-header">
            <h1>
              <FaShoppingCart className="mr-2" /> Orders Management
            </h1>
            <button
              className="btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              <FaPlus /> New Order
            </button>
          </header>

          {showForm && (
            <div className="form-card">
              <h2>Create New Order</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Customer Name</label>
                  <input
                    type="text"
                    value={formData.customer}
                    onChange={(e) =>
                      setFormData({ ...formData, customer: e.target.value })
                    }
                    placeholder="Enter customer name"
                  />
                </div>
                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    placeholder="Enter product name"
                  />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="number"
                    value={formData.qty}
                    onChange={(e) =>
                      setFormData({ ...formData, qty: e.target.value })
                    }
                    placeholder="Enter quantity"
                  />
                </div>
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                    placeholder="Enter amount"
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="form-actions">
                <button className="btn-success" onClick={handleAddOrder}>
                  Save Order
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="table-card">
            <h2>All Orders</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>{order.qty}</td>
                    <td>${order.amount}</td>
                    <td>
                      <span
                        className={`status-badge ${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-icon edit">
                        <FaEdit />
                      </button>
                      <button
                        className="btn-icon delete"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Orders;
