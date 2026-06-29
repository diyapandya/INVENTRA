import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { FaChartBar, FaDollarSign } from "react-icons/fa";
import "./Revenue.css";

function Revenue() {
  const [revenueData] = useState({
    todayRevenue: 3850.5,
    weekRevenue: 28450.75,
    monthRevenue: 89450.75,
    yearRevenue: 450230.5,
    dailyAverage: 156.23,
  });

  const [revenueByProduct] = useState([
    { product: "Wireless Mouse", revenue: 12560, orders: 156 },
    { product: "Mechanical Keyboard", revenue: 18920, orders: 123 },
    { product: "Monitor Stand", revenue: 8010, orders: 89 },
    { product: "USB Hub", revenue: 14500, orders: 145 },
    { product: "Headphones", revenue: 24560, orders: 98 },
  ]);

  const [revenueByCustomer] = useState([
    { customer: "Acme Corporation", revenue: 12500, orders: 45 },
    { customer: "Global Traders", revenue: 10200, orders: 38 },
    { customer: "Quick Retail", revenue: 8900, orders: 32 },
    { customer: "ABC Store", revenue: 7500, orders: 28 },
    { customer: "XYZ Mart", revenue: 5800, orders: 22 },
  ]);

  return (
    <div className="revenue-container">
      <Navbar />
      <div className="revenue-layout">
        <Sidebar />
        <main className="revenue-main">
          <header className="revenue-header">
            <h1>
              <FaDollarSign className="mr-2" /> Revenue Analytics
            </h1>
          </header>

          {/* Revenue Cards */}
          <section className="revenue-cards">
            <div className="revenue-card">
              <h3>Today's Revenue</h3>
              <p className="revenue-amount">
                ${revenueData.todayRevenue.toFixed(2)}
              </p>
            </div>
            <div className="revenue-card">
              <h3>Week Revenue</h3>
              <p className="revenue-amount">
                ${revenueData.weekRevenue.toFixed(2)}
              </p>
            </div>
            <div className="revenue-card">
              <h3>Month Revenue</h3>
              <p className="revenue-amount">
                ${revenueData.monthRevenue.toFixed(2)}
              </p>
            </div>
            <div className="revenue-card">
              <h3>Year Revenue</h3>
              <p className="revenue-amount">
                ${revenueData.yearRevenue.toFixed(2)}
              </p>
            </div>
            <div className="revenue-card">
              <h3>Daily Average</h3>
              <p className="revenue-amount">
                ${revenueData.dailyAverage.toFixed(2)}
              </p>
            </div>
          </section>

          {/* Revenue Tables */}
          <section className="revenue-tables">
            <div className="table-container">
              <h2>Revenue by Product</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Total Revenue</th>
                    <th>Total Orders</th>
                    <th>Average Per Order</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueByProduct.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.product}</td>
                      <td>${item.revenue.toFixed(2)}</td>
                      <td>{item.orders}</td>
                      <td>${(item.revenue / item.orders).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h2>Revenue by Customer</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Total Revenue</th>
                    <th>Total Orders</th>
                    <th>Average Per Order</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueByCustomer.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.customer}</td>
                      <td>${item.revenue.toFixed(2)}</td>
                      <td>{item.orders}</td>
                      <td>${(item.revenue / item.orders).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Revenue;
