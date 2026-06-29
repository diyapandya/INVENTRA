import React from "react";
import Navbar from "../../components/Navbar";
import {
  FaBoxes,
  FaClipboardCheck,
  FaDollarSign,
  FaExclamationTriangle,
  FaPlus,
  FaShoppingBag,
  FaTruckLoading,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

const cards = [
  { title: "Products", value: "1,248", icon: <FaBoxes />, tone: "green" },
  { title: "Stock Value", value: "$284,600", icon: <FaDollarSign />, tone: "blue" },
  { title: "Low Stock", value: "32", icon: <FaExclamationTriangle />, tone: "amber" },
  { title: "Out Of Stock", value: "9", icon: <FaExclamationTriangle />, tone: "red" },
  { title: "Pending Purchase Orders", value: "18", icon: <FaShoppingBag />, tone: "purple" },
  { title: "Today's Added Stock", value: "426", icon: <FaTruckLoading />, tone: "teal" },
];

const charts = [
  "Stock Distribution",
  "Category Distribution",
  "Inventory Trend",
  "Warehouse Utilization",
  "Low Stock Analysis",
];

const latestProducts = [
  ["SKU-1048", "USB-C Docking Station", "Electronics", "186"],
  ["SKU-1047", "Office Chair", "Furniture", "72"],
  ["SKU-1046", "Thermal Labels", "Supplies", "940"],
  ["SKU-1045", "Barcode Scanner", "Hardware", "43"],
];

const latestStockEntries = [
  ["ENT-221", "Mechanical Keyboard", "+80", "Receiving"],
  ["ENT-220", "Wireless Mouse", "+150", "Receiving"],
  ["ENT-219", "Laptop Stand", "-26", "Dispatch"],
  ["ENT-218", "Packing Tape", "+300", "Receiving"],
];

const suppliers = [
  ["Northwind Supply", "Electronics", "Active"],
  ["Urban Warehouse Co.", "Furniture", "Active"],
  ["PackRight Logistics", "Packaging", "Review"],
  ["Prime Office Goods", "Supplies", "Active"],
];

const purchaseOrders = [
  ["PO-7781", "Northwind Supply", "$8,420", "Pending"],
  ["PO-7780", "PackRight Logistics", "$2,180", "Approved"],
  ["PO-7779", "Urban Warehouse Co.", "$11,600", "Pending"],
  ["PO-7778", "Prime Office Goods", "$4,950", "Received"],
];

const responsibilities = [
  "Manage Products",
  "Update Inventory",
  "Monitor Stock Levels",
  "Manage Suppliers",
  "Track Inventory Activities",
];

function Dashboard() {
  return (
    <div className="inventory-manager-page">
      <Navbar />
      <div className="inventory-manager-layout">
        <Sidebar />
        <main className="inventory-manager-main">
          <header className="inventory-manager-header">
            <div>
              <h1>Inventory Manager Dashboard</h1>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </header>

          <section className="inventory-manager-kpis">
            {cards.map((card) => (
              <article className="inventory-manager-kpi" key={card.title}>
                <span className={`inventory-manager-kpi__icon ${card.tone}`}>
                  {card.icon}
                </span>
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.value}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="inventory-manager-charts">
            {charts.map((chart) => (
              <article className="inventory-manager-panel" key={chart}>
                <h2>{chart}</h2>
                <div className="inventory-manager-chart">
                  <span>{chart}</span>
                </div>
              </article>
            ))}
          </section>

          <section className="inventory-manager-tables">
            <DashboardTable
              title="Latest Products"
              headers={["SKU", "Product", "Category", "Stock"]}
              rows={latestProducts}
            />
            <DashboardTable
              title="Latest Stock Entries"
              headers={["Entry", "Product", "Qty", "Type"]}
              rows={latestStockEntries}
            />
            <DashboardTable
              title="Supplier List"
              headers={["Supplier", "Category", "Status"]}
              rows={suppliers}
            />
            <DashboardTable
              title="Purchase Orders"
              headers={["PO", "Supplier", "Value", "Status"]}
              rows={purchaseOrders}
            />
          </section>

          <section className="inventory-manager-responsibilities">
            <h2>Responsibilities</h2>
            <div className="inventory-manager-responsibility-grid">
              {responsibilities.map((item) => (
                <div className="inventory-manager-responsibility" key={item}>
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
    <article className="inventory-manager-table-card">
      <h2>{title}</h2>
      <table className="inventory-manager-table">
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

export default Dashboard;
