import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { FaUsers, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./Customers.css";

function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Acme Corporation",
      email: "info@acme.com",
      phone: "555-0101",
      city: "New York",
      totalOrders: 45,
      totalSpent: 12500,
    },
    {
      id: 2,
      name: "Global Traders",
      email: "sales@global.com",
      phone: "555-0102",
      city: "Los Angeles",
      totalOrders: 38,
      totalSpent: 10200,
    },
    {
      id: 3,
      name: "Quick Retail",
      email: "contact@quick.com",
      phone: "555-0103",
      city: "Chicago",
      totalOrders: 32,
      totalSpent: 8900,
    },
    {
      id: 4,
      name: "ABC Store",
      email: "admin@abc.com",
      phone: "555-0104",
      city: "Houston",
      totalOrders: 28,
      totalSpent: 7500,
    },
    {
      id: 5,
      name: "XYZ Mart",
      email: "support@xyz.com",
      phone: "555-0105",
      city: "Phoenix",
      totalOrders: 22,
      totalSpent: 5800,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleAddCustomer = () => {
    if (formData.name && formData.email) {
      const newCustomer = {
        id: customers.length + 1,
        ...formData,
        totalOrders: 0,
        totalSpent: 0,
      };
      setCustomers([newCustomer, ...customers]);
      setFormData({ name: "", email: "", phone: "", city: "" });
      setShowForm(false);
    }
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="customers-container">
      <Navbar />
      <div className="customers-layout">
        <Sidebar />
        <main className="customers-main">
          <header className="customers-header">
            <h1>
              <FaUsers className="mr-2" /> Customers Management
            </h1>
            <button
              className="btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              <FaPlus /> New Customer
            </button>
          </header>

          {showForm && (
            <div className="form-card">
              <h2>Add New Customer</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Customer Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter customer name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="Enter city"
                  />
                </div>
              </div>
              <div className="form-actions">
                <button className="btn-success" onClick={handleAddCustomer}>
                  Save Customer
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
            <h2>All Customers</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Total Orders</th>
                  <th>Total Spent</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.city}</td>
                    <td>{customer.totalOrders}</td>
                    <td>${customer.totalSpent}</td>
                    <td>
                      <button className="btn-icon edit">
                        <FaEdit />
                      </button>
                      <button
                        className="btn-icon delete"
                        onClick={() => handleDeleteCustomer(customer.id)}
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

export default Customers;
