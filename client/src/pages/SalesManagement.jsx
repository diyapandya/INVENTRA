import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from './SalesManager/Sidebar';
import { FaDollarSign, FaFileInvoice, FaPlusCircle } from 'react-icons/fa';
import './SalesManagement.css';

/**
 * SalesManagement Page
 * Records customer checkout transactions and tallies revenue.
 */
function SalesManagement() {
  const [sales, setSales] = useState([
    { invoice: 'INV-001', date: '2026-06-25', item: 'Wireless Mouse', qty: 2, amount: 59.98 },
    { invoice: 'INV-002', date: '2026-06-26', item: 'Keyboard', qty: 1, amount: 49.99 }
  ]);

  const [form, setForm] = useState({ item: '', qty: '', price: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRecordSale = (e) => {
    e.preventDefault();
    if (!form.item || !form.qty || !form.price) return;
    
    const qty = parseInt(form.qty);
    const price = parseFloat(form.price);
    const amount = qty * price;

    const newSale = {
      invoice: `INV-${String(sales.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      item: form.item,
      qty,
      amount
    };

    setSales([newSale, ...sales]);
    setForm({ item: '', qty: '', price: '' });
  };

  const totalRevenue = sales.reduce((sum, s) => sum + s.amount, 0);

  return (
    <div className="sales-app-container">
      <Navbar />
      <div className="sales-layout">
        <Sidebar />
        <main className="sales-content">
          <header className="sales-header">
            <h1 className="sales-title">
              <FaFileInvoice className="mr-2 text-amber-500 text-2xl" /> Sales Management
            </h1>
            <div className="sales-revenue-box">
              <span className="sales-revenue-label">Tally:</span>
              <strong className="sales-revenue-amount">${totalRevenue.toFixed(2)}</strong>
            </div>
          </header>

          <div className="sales-grid">
            {/* List */}
            <div className="sales-table-card">
              <h3 className="card-section-title">Sales Transactions History</h3>
              <table className="sales-table">
                <thead>
                  <tr className="table-header-row">
                    <th>Invoice No</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((s, idx) => (
                    <tr key={idx} className="table-data-row">
                      <td>{s.invoice}</td>
                      <td>{s.date}</td>
                      <td>{s.item}</td>
                      <td>{s.qty}</td>
                      <td>${s.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Form */}
            <div className="sales-form-card">
              <h3 className="card-section-title">Record New Sale</h3>
              <form onSubmit={handleRecordSale} className="sales-form">
                <div className="form-group">
                  <label className="form-label">Product Name</label>
                  <input type="text" name="item" value={form.item} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Quantity</label>
                  <input type="number" name="qty" value={form.qty} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Unit Price ($)</label>
                  <input type="number" step="0.01" name="price" value={form.price} onChange={handleInputChange} className="form-input" required />
                </div>
                <button type="submit" className="sales-submit-btn">
                  <FaPlusCircle className="mr-1" /> Record Invoice
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SalesManagement;
