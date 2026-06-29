import React from "react";
import Navbar from "../../components/Navbar";
import {
  FaBoxes,
  FaChartLine,
  FaClipboardCheck,
  FaDollarSign,
  FaExclamationTriangle,
  FaShoppingCart,
  FaTags,
  FaTruck,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

const cards = [
  ["Total Products", "1,248", <FaBoxes />, "blue"],
  ["Total Categories", "36", <FaTags />, "green"],
  ["Total Inventory Value", "$284,600", <FaWarehouse />, "teal"],
  ["Total Sales", "8,932", <FaShoppingCart />, "purple"],
  ["Revenue", "$426,900", <FaDollarSign />, "amber"],
  ["Suppliers", "64", <FaTruck />, "green"],
  ["Orders", "1,326", <FaShoppingCart />, "blue"],
  ["Users", "118", <FaUsers />, "purple"],
  ["Low Stock", "32", <FaExclamationTriangle />, "amber"],
  ["Out of Stock", "9", <FaExclamationTriangle />, "red"],
  ["Pending Orders", "47", <FaClipboardCheck />, "teal"],
  ["Today's Sales", "$14,820", <FaChartLine />, "green"],
];

const charts = [
  "Monthly Revenue",
  "Monthly Sales",
  "Inventory Status",
  "Category Distribution",
  "Supplier Performance",
  "Top Products",
  "Demand Forecast",
  "Revenue by Category",
  "Sales Heatmap",
];

const tables = [
  {
    title: "Recent Products",
    headers: ["SKU", "Product", "Category", "Stock"],
    rows: [
      ["SKU-2048", "USB-C Dock", "Electronics", "186"],
      ["SKU-2047", "Office Chair", "Furniture", "72"],
      ["SKU-2046", "Thermal Labels", "Supplies", "940"],
    ],
  },
  {
    title: "Recent Orders",
    headers: ["Order", "Customer", "Amount", "Status"],
    rows: [
      ["ORD-881", "ABC Store", "$1,240", "Completed"],
      ["ORD-880", "Global Traders", "$860", "Pending"],
      ["ORD-879", "Retail Hub", "$2,180", "Processing"],
    ],
  },
  {
    title: "Recent Users",
    headers: ["Name", "Role", "Email", "Status"],
    rows: [
      ["Diya Sharma", "Administrator", "admin@inventra.com", "Active"],
      ["Karan Mehta", "Inventory Manager", "inventory@inventra.com", "Active"],
      ["Riya Patel", "Sales Manager", "sales@inventra.com", "Active"],
    ],
  },
  {
    title: "Recent Suppliers",
    headers: ["Supplier", "Category", "Contact", "Status"],
    rows: [
      ["Northwind Supply", "Electronics", "orders@northwind.com", "Active"],
      ["PackRight Logistics", "Packaging", "ops@packright.com", "Review"],
      ["Urban Warehouse Co.", "Furniture", "supply@urban.com", "Active"],
    ],
  },
  {
    title: "Recent Activities",
    headers: ["Activity", "Owner", "Module", "Time"],
    rows: [
      ["Updated stock level", "Karan Mehta", "Inventory", "09:40"],
      ["Generated invoice", "Riya Patel", "Sales", "10:15"],
      ["Added supplier", "Diya Sharma", "Suppliers", "11:05"],
    ],
  },
  {
    title: "Low Stock Products",
    headers: ["SKU", "Product", "Available", "Threshold"],
    rows: [
      ["SKU-1038", "Packing Tape", "0", "100"],
      ["SKU-1045", "Barcode Scanner", "43", "50"],
      ["SKU-1082", "USB Hub", "12", "40"],
    ],
  },
];

const responsibilities = [
  "Manage Users",
  "Manage Entire System",
  "View Reports & Analytics",
  "Monitor Inventory Performance",
  "Maintain Platform Operations",
];

function AdministratorDashboard() {
  return (
    <div className="administrator-page">
      <Navbar />
      <div className="administrator-layout">
        <Sidebar />
        <main className="administrator-main">
          <header className="administrator-header">
            <div>
              <h1>Administrator Dashboard</h1>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </header>

          <section className="administrator-kpis">
            {cards.map(([title, value, icon, tone]) => (
              <article className="administrator-kpi" key={title}>
                <span className={`administrator-kpi__icon ${tone}`}>{icon}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{value}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="administrator-charts">
            {charts.map((chart) => (
              <article className="administrator-panel" key={chart}>
                <h2>{chart}</h2>
                <div className="administrator-chart">
                  <span>{chart}</span>
                </div>
              </article>
            ))}
          </section>

          <section className="administrator-tables">
            {tables.map((table) => (
              <DashboardTable key={table.title} {...table} />
            ))}
          </section>

          <section className="administrator-responsibilities">
            <h2>Responsibilities</h2>
            <div className="administrator-responsibility-grid">
              {responsibilities.map((item) => (
                <div className="administrator-responsibility" key={item}>
                  <FaClipboardCheck />
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

function DashboardTable({ title, headers, rows }) {
  return (
    <article className="administrator-table-card">
      <h2>{title}</h2>
      <table className="administrator-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default AdministratorDashboard;
