import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { FaFileAlt, FaDownload, FaCalendar } from "react-icons/fa";
import "./Reports.css";

function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [reports] = useState([
    {
      id: 1,
      name: "Sales Summary Report",
      date: "2026-06-29",
      period: "June 2026",
      status: "Ready",
      format: "PDF",
    },
    {
      id: 2,
      name: "Revenue Analysis Report",
      date: "2026-06-28",
      period: "Q2 2026",
      status: "Ready",
      format: "Excel",
    },
    {
      id: 3,
      name: "Customer Performance Report",
      date: "2026-06-27",
      period: "June 2026",
      status: "Ready",
      format: "PDF",
    },
    {
      id: 4,
      name: "Product Sales Report",
      date: "2026-06-26",
      period: "June 2026",
      status: "Processing",
      format: "PDF",
    },
    {
      id: 5,
      name: "Inventory & Sales Correlation",
      date: "2026-06-25",
      period: "Q2 2026",
      status: "Ready",
      format: "Excel",
    },
  ]);

  const [reportSummary] = useState({
    totalOrders: 1250,
    totalRevenue: 89450.75,
    averageOrderValue: 71.56,
    topProduct: "Mechanical Keyboard",
    topCustomer: "Acme Corporation",
    customerRetention: 78.5,
  });

  const handleDownload = (reportId) => {
    alert(`Download report ${reportId}`);
  };

  return (
    <div className="reports-container">
      <Navbar />
      <div className="reports-layout">
        <Sidebar />
        <main className="reports-main">
          <header className="reports-header">
            <h1>
              <FaFileAlt className="mr-2" /> Sales Reports
            </h1>
          </header>

          {/* Period Filter */}
          <div className="filter-section">
            <label className="filter-label">
              <FaCalendar className="mr-1" /> Select Period:
            </label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="filter-select"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>

          {/* Summary Cards */}
          <section className="summary-cards">
            <div className="summary-card">
              <h3>Total Orders</h3>
              <p className="summary-value">{reportSummary.totalOrders}</p>
            </div>
            <div className="summary-card">
              <h3>Total Revenue</h3>
              <p className="summary-value">
                ${reportSummary.totalRevenue.toFixed(2)}
              </p>
            </div>
            <div className="summary-card">
              <h3>Average Order Value</h3>
              <p className="summary-value">
                ${reportSummary.averageOrderValue.toFixed(2)}
              </p>
            </div>
            <div className="summary-card">
              <h3>Top Product</h3>
              <p className="summary-value">{reportSummary.topProduct}</p>
            </div>
            <div className="summary-card">
              <h3>Top Customer</h3>
              <p className="summary-value">{reportSummary.topCustomer}</p>
            </div>
            <div className="summary-card">
              <h3>Customer Retention</h3>
              <p className="summary-value">
                {reportSummary.customerRetention}%
              </p>
            </div>
          </section>

          {/* Reports List */}
          <section className="reports-list">
            <h2>Available Reports</h2>
            <div className="reports-grid">
              {reports.map((report) => (
                <div key={report.id} className="report-card">
                  <div className="report-header">
                    <h3>{report.name}</h3>
                    <span
                      className={`status-badge ${report.status.toLowerCase()}`}
                    >
                      {report.status}
                    </span>
                  </div>
                  <div className="report-details">
                    <p>
                      <strong>Date:</strong> {report.date}
                    </p>
                    <p>
                      <strong>Period:</strong> {report.period}
                    </p>
                    <p>
                      <strong>Format:</strong> {report.format}
                    </p>
                  </div>
                  <div className="report-actions">
                    <button
                      className="btn-download"
                      onClick={() => handleDownload(report.id)}
                      disabled={report.status !== "Ready"}
                    >
                      <FaDownload /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Generate Report Section */}
          <section className="generate-section">
            <h2>Generate Custom Report</h2>
            <div className="generate-form">
              <div className="form-group">
                <label>Report Type</label>
                <select className="form-select">
                  <option>Sales Summary</option>
                  <option>Revenue Analysis</option>
                  <option>Customer Analysis</option>
                  <option>Product Performance</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date Range</label>
                <input type="date" className="form-input" />
                <span className="to-text">to</span>
                <input type="date" className="form-input" />
              </div>
              <button className="btn-generate">Generate Report</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Reports;
