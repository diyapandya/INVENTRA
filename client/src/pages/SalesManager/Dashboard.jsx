import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import {
  FaShoppingCart,
  FaDollarSign,
  FaClipboardList,
  FaUser,
  FaExclamationCircle,
  FaChartLine,
  FaBox,
} from "react-icons/fa";
import "./Dashboard.css";

function SalesManagerDashboard() {
  const [dashboardData, setDashboardData] = useState({
    todayOrders: 24,
    todayRevenue: 3850.5,
    monthlyRevenue: 89450.75,
    averageOrder: 156.23,
    pendingPayments: 8,
    topCustomer: { name: "Acme Corporation", orders: 45 },
  });

  const [recentOrders] = useState([
    {
      id: "ORD-001",
      date: "2026-06-29",
      customer: "ABC Store",
      amount: 450,
      status: "Completed",
    },
    {
      id: "ORD-002",
      date: "2026-06-29",
      customer: "XYZ Mart",
      amount: 320,
      status: "Pending",
    },
    {
      id: "ORD-003",
      date: "2026-06-28",
      customer: "Quick Shop",
      amount: 680,
      status: "Completed",
    },
    {
      id: "ORD-004",
      date: "2026-06-28",
      customer: "Retail Hub",
      amount: 215,
      status: "Pending",
    },
    {
      id: "ORD-005",
      date: "2026-06-27",
      customer: "Store Plus",
      amount: 890,
      status: "Completed",
    },
  ]);

  const [invoices] = useState([
    {
      id: "INV-001",
      date: "2026-06-29",
      customer: "ABC Store",
      amount: 1200,
      status: "Paid",
    },
    {
      id: "INV-002",
      date: "2026-06-28",
      customer: "XYZ Mart",
      amount: 850,
      status: "Pending",
    },
    {
      id: "INV-003",
      date: "2026-06-27",
      customer: "Quick Shop",
      amount: 450,
      status: "Paid",
    },
  ]);

  const [topCustomers] = useState([
    { name: "Acme Corporation", orders: 45, revenue: 12500 },
    { name: "Global Traders", orders: 38, revenue: 10200 },
    { name: "Quick Retail", orders: 32, revenue: 8900 },
  ]);

  const [topProducts] = useState([
    { name: "Wireless Mouse", sold: 156, revenue: 4680 },
    { name: "Mechanical Keyboard", sold: 123, revenue: 6150 },
    { name: "Monitor Stand", sold: 89, revenue: 2670 },
    { name: "USB Hub", sold: 145, revenue: 1450 },
  ]);

  const accessScope = [
    "Manage Orders",
    "Manage Customers",
    "Create Invoices",
    "Use Sales Reports",
    "Read Products, Categories, Suppliers & Inventory",
    "View Forecasting",
    "Use Limited Analytics",
  ];

  return (
    <div className="sales-dashboard-container">
      <Navbar />
      <div className="sales-dashboard-layout">
        <Sidebar />
        <main className="sales-dashboard-main">
          <header className="sales-dashboard-header">
            <h1>Sales Manager Dashboard</h1>
            <p className="date-text">{new Date().toLocaleDateString()}</p>
          </header>

          {/* KPI Cards */}
          <section className="kpi-cards-section">
            <div className="kpi-card">
              <div className="kpi-icon today-orders">
                <FaShoppingCart />
              </div>
              <div className="kpi-content">
                <h3>Today's Orders</h3>
                <p className="kpi-value">{dashboardData.todayOrders}</p>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon today-revenue">
                <FaDollarSign />
              </div>
              <div className="kpi-content">
                <h3>Today's Revenue</h3>
                <p className="kpi-value">
                  ${dashboardData.todayRevenue.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon monthly-revenue">
                <FaChartLine />
              </div>
              <div className="kpi-content">
                <h3>Monthly Revenue</h3>
                <p className="kpi-value">
                  ${dashboardData.monthlyRevenue.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon average-order">
                <FaClipboardList />
              </div>
              <div className="kpi-content">
                <h3>Average Order</h3>
                <p className="kpi-value">
                  ${dashboardData.averageOrder.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon pending-payments">
                <FaExclamationCircle />
              </div>
              <div className="kpi-content">
                <h3>Pending Payments</h3>
                <p className="kpi-value">{dashboardData.pendingPayments}</p>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon top-customer">
                <FaUser />
              </div>
              <div className="kpi-content">
                <h3>Top Customer</h3>
                <p className="kpi-value">{dashboardData.topCustomer.name}</p>
                <p className="kpi-subtitle">
                  {dashboardData.topCustomer.orders} orders
                </p>
              </div>
            </div>
          </section>

          {/* Charts Section */}
          <section className="charts-section">
            <div className="chart-container">
              <h2>Sales Trend</h2>
              <div className="chart-placeholder">
                <p>Sales trend chart will be displayed here</p>
              </div>
            </div>

            <div className="chart-container">
              <h2>Revenue Trend</h2>
              <div className="chart-placeholder">
                <p>Revenue trend chart will be displayed here</p>
              </div>
            </div>

            <div className="chart-container">
              <h2>Top Selling Products</h2>
              <div className="chart-placeholder">
                <p>Top selling products chart will be displayed here</p>
              </div>
            </div>

            <div className="chart-container">
              <h2>Customer Purchase Pattern</h2>
              <div className="chart-placeholder">
                <p>Customer purchase pattern chart will be displayed here</p>
              </div>
            </div>

            <div className="chart-container">
              <h2>Invoice Status</h2>
              <div className="chart-placeholder">
                <p>Invoice status chart will be displayed here</p>
              </div>
            </div>
          </section>

          {/* Tables Section */}
          <section className="tables-section">
            <div className="table-container">
              <h2>Recent Orders</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, idx) => (
                    <tr key={idx}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.customer}</td>
                      <td>${order.amount}</td>
                      <td>
                        <span
                          className={`status-badge ${order.status.toLowerCase()}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h2>Invoices</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice, idx) => (
                    <tr key={idx}>
                      <td>{invoice.id}</td>
                      <td>{invoice.date}</td>
                      <td>{invoice.customer}</td>
                      <td>${invoice.amount}</td>
                      <td>
                        <span
                          className={`status-badge ${invoice.status.toLowerCase()}`}
                        >
                          {invoice.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h2>Top Customers</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Total Orders</th>
                    <th>Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {topCustomers.map((customer, idx) => (
                    <tr key={idx}>
                      <td>{customer.name}</td>
                      <td>{customer.orders}</td>
                      <td>${customer.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h2>Best Selling Products</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Units Sold</th>
                    <th>Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, idx) => (
                    <tr key={idx}>
                      <td>{product.name}</td>
                      <td>{product.sold}</td>
                      <td>${product.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="sales-access-section">
            <h2>Access Scope</h2>
            <div className="sales-access-grid">
              {accessScope.map((item) => (
                <div className="sales-access-item" key={item}>
                  <FaClipboardList />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default SalesManagerDashboard;
