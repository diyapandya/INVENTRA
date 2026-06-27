import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { FaBoxes, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import './ProductManagement.css';

/**
 * ProductManagement Page
 * Handles displaying and mock-adding inventory products.
 */
function ProductManagement() {
  const [products, setProducts] = useState([
    { sku: 101, name: 'Wireless Mouse', price: 29.99, category: 'Electronics', stock: 15 },
    { sku: 102, name: 'Keyboard', price: 49.99, category: 'Electronics', stock: 8 },
    { sku: 103, name: 'Water Bottle', price: 15.50, category: 'Home & Kitchen', stock: 50 }
  ]);

  const [form, setForm] = useState({ sku: '', name: '', price: '', category: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!form.sku || !form.name || !form.price) return;
    
    const newProduct = {
      sku: parseInt(form.sku),
      name: form.name,
      price: parseFloat(form.price),
      category: form.category || 'General',
      stock: 0
    };

    setProducts([...products, newProduct]);
    setForm({ sku: '', name: '', price: '', category: '' });
  };

  const handleDelete = (sku) => {
    setProducts(products.filter(p => p.sku !== sku));
  };

  return (
    <div className="product-app-container">
      <Navbar />
      <div className="product-layout">
        <Sidebar />
        <main className="product-content">
          <header className="product-header">
            <h1 className="product-title">
              <FaBoxes className="mr-2 text-blue-500 text-2xl" /> Product Catalogue
            </h1>
          </header>
          
          <div className="product-grid">
            {/* List */}
            <div className="product-table-card">
              <h3 className="card-section-title">Stocked Products</h3>
              <table className="product-table">
                <thead>
                  <tr className="table-header-row">
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, idx) => (
                    <tr key={idx} className="table-data-row">
                      <td>{p.sku}</td>
                      <td>{p.name}</td>
                      <td>${p.price.toFixed(2)}</td>
                      <td>{p.category}</td>
                      <td>
                        <span className={`stock-badge ${p.stock < 10 ? 'stock-low' : 'stock-normal'}`}>
                          {p.stock}
                        </span>
                      </td>
                      <td>
                        <button className="product-delete-btn" onClick={() => handleDelete(p.sku)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Form */}
            <div className="product-form-card">
              <h3 className="card-section-title">Add New Product</h3>
              <form onSubmit={handleAddProduct} className="product-form">
                <div className="form-group">
                  <label className="form-label">SKU Code</label>
                  <input type="number" name="sku" value={form.sku} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Product Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Unit Price ($)</label>
                  <input type="number" step="0.01" name="price" value={form.price} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <input type="text" name="category" value={form.category} onChange={handleInputChange} className="form-input" />
                </div>
                <button type="submit" className="product-submit-btn">
                  <FaPlusCircle className="mr-1" /> Add Product
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductManagement;
