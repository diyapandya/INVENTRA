import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { FaTruck, FaPlusCircle } from 'react-icons/fa';
import './SupplierManagement.css';

/**
 * SupplierManagement Page
 * Manages suppliers delivering specific product categories.
 */
function SupplierManagement() {
  const [suppliers, setSuppliers] = useState([
    { name: 'Apex Electronics', contact: '+1-555-0199', email: 'apex@example.com', category: 'Electronics' },
    { name: 'Global Kitchen Corp', contact: '+1-555-0143', email: 'kitchen@example.com', category: 'Home & Kitchen' }
  ]);

  const [form, setForm] = useState({ name: '', contact: '', email: '', category: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddSupplier = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    
    setSuppliers([...suppliers, form]);
    setForm({ name: '', contact: '', email: '', category: '' });
  };

  return (
    <div className="supplier-app-container">
      <Navbar />
      <div className="supplier-layout">
        <Sidebar />
        <main className="supplier-content">
          <header className="supplier-header">
            <h1 className="supplier-title">
              <FaTruck className="mr-2 text-indigo-500 text-2xl" /> Supplier Management
            </h1>
          </header>

          <div className="supplier-grid">
            {/* List */}
            <div className="supplier-table-card">
              <h3 className="card-section-title">Active Suppliers</h3>
              <table className="supplier-table">
                <thead>
                  <tr className="table-header-row">
                    <th>Supplier Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Product Category</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map((s, idx) => (
                    <tr key={idx} className="table-data-row">
                      <td>{s.name}</td>
                      <td>{s.contact}</td>
                      <td>{s.email}</td>
                      <td>{s.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Form */}
            <div className="supplier-form-card">
              <h3 className="card-section-title">Add Supplier</h3>
              <form onSubmit={handleAddSupplier} className="supplier-form">
                <div className="form-group">
                  <label className="form-label">Supplier Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Number</label>
                  <input type="text" name="contact" value={form.contact} onChange={handleInputChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Product Category</label>
                  <input type="text" name="category" value={form.category} onChange={handleInputChange} className="form-input" />
                </div>
                <button type="submit" className="supplier-submit-btn">
                  <FaPlusCircle className="mr-1" /> Save Supplier
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SupplierManagement;
