import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { FaFileInvoice, FaPlus, FaDownload, FaTrash } from "react-icons/fa";
import "./Invoices.css";

function Invoices() {
  const [invoices, setInvoices] = useState([
    {
      id: "INV-001",
      date: "2026-06-29",
      customer: "ABC Store",
      amount: 1200,
      status: "Paid",
      dueDate: "2026-07-09",
    },
    {
      id: "INV-002",
      date: "2026-06-28",
      customer: "XYZ Mart",
      amount: 850,
      status: "Pending",
      dueDate: "2026-07-08",
    },
    {
      id: "INV-003",
      date: "2026-06-27",
      customer: "Quick Shop",
      amount: 450,
      status: "Paid",
      dueDate: "2026-07-07",
    },
    {
      id: "INV-004",
      date: "2026-06-26",
      customer: "Retail Hub",
      amount: 2100,
      status: "Overdue",
      dueDate: "2026-06-20",
    },
    {
      id: "INV-005",
      date: "2026-06-25",
      customer: "Store Plus",
      amount: 675,
      status: "Pending",
      dueDate: "2026-07-05",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    customer: "",
    amount: "",
    dueDate: "",
    status: "Pending",
  });

  const handleAddInvoice = () => {
    if (formData.customer && formData.amount && formData.dueDate) {
      const newInvoice = {
        id: `INV-${String(invoices.length + 1).padStart(3, "0")}`,
        date: new Date().toISOString().split("T")[0],
        ...formData,
      };
      setInvoices([newInvoice, ...invoices]);
      setFormData({ customer: "", amount: "", dueDate: "", status: "Pending" });
      setShowForm(false);
    }
  };

  const handleDeleteInvoice = (id) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  };

  const handleDownload = (invoiceId) => {
    alert(`Download invoice ${invoiceId}`);
  };

  return (
    <div className="invoices-container">
      <Navbar />
      <div className="invoices-layout">
        <Sidebar />
        <main className="invoices-main">
          <header className="invoices-header">
            <h1>
              <FaFileInvoice className="mr-2" /> Invoices Management
            </h1>
            <button
              className="btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              <FaPlus /> New Invoice
            </button>
          </header>

          {showForm && (
            <div className="form-card">
              <h2>Create New Invoice</h2>
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
                  <label>Due Date</label>
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) =>
                      setFormData({ ...formData, dueDate: e.target.value })
                    }
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
                    <option value="Paid">Paid</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>
              </div>
              <div className="form-actions">
                <button className="btn-success" onClick={handleAddInvoice}>
                  Save Invoice
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
            <h2>All Invoices</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                    <td>{invoice.date}</td>
                    <td>{invoice.customer}</td>
                    <td>${invoice.amount}</td>
                    <td>{invoice.dueDate}</td>
                    <td>
                      <span
                        className={`status-badge ${invoice.status.toLowerCase()}`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-icon download"
                        onClick={() => handleDownload(invoice.id)}
                      >
                        <FaDownload />
                      </button>
                      <button
                        className="btn-icon delete"
                        onClick={() => handleDeleteInvoice(invoice.id)}
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

export default Invoices;
