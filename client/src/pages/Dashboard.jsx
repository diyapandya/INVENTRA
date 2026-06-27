import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import KPICard from "../components/KPICard";
import InventoryChart from "../components/InventoryChart";
import {
  FaBoxes,
  FaTruck,
  FaDollarSign,
  FaExclamationTriangle,
  FaPlus,
  FaSyncAlt,
  FaReceipt,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";
import "./Dashboard.css";

/**
 * Dashboard Home View
 * Displays high level KPIs and inventory trends, with role-specific content.
 */
function Dashboard({ role }) {
  const adminKPIs = [
    {
      title: "Total Users",
      value: "42",
      icon: <FaUsers />,
      borderClass: "border-purple-500",
      textClass: "text-purple-500",
    },
    {
      title: "Total Products",
      value: "128",
      icon: <FaBoxes />,
      borderClass: "border-blue-500",
      textClass: "text-blue-500",
    },
    {
      title: "Total Suppliers",
      value: "14",
      icon: <FaUsers />,
      borderClass: "border-emerald-500",
      textClass: "text-emerald-500",
    },
    {
      title: "Total Sales",
      value: "$42,850",
      icon: <FaDollarSign />,
      borderClass: "border-amber-500",
      textClass: "text-amber-500",
    },
    {
      title: "Pending Orders",
      value: "7",
      icon: <FaExclamationTriangle />,
      borderClass: "border-orange-500",
      textClass: "text-orange-500",
    },
    {
      title: "Low Stock Items",
      value: "3",
      icon: <FaExclamationTriangle />,
      borderClass: "border-red-500",
      textClass: "text-red-500",
    },
  ];

  const inventoryKPIs = [
    {
      title: "Total Products",
      value: "128",
      icon: <FaBoxes />,
      borderClass: "border-blue-500",
      textClass: "text-blue-500",
    },
    {
      title: "Available Stock",
      value: "5,240",
      icon: <FaBoxes />,
      borderClass: "border-emerald-500",
      textClass: "text-emerald-500",
    },
    {
      title: "Low Stock Products",
      value: "12",
      icon: <FaExclamationTriangle />,
      borderClass: "border-amber-500",
      textClass: "text-amber-500",
    },
    {
      title: "Out of Stock",
      value: "3",
      icon: <FaExclamationTriangle />,
      borderClass: "border-red-500",
      textClass: "text-red-500",
    },
  ];

  const salesKPIs = [
    {
      title: "Today's Sales",
      value: "$3,240",
      icon: <FaDollarSign />,
      borderClass: "border-amber-500",
      textClass: "text-amber-500",
    },
    {
      title: "Monthly Revenue",
      value: "$67,850",
      icon: <FaDollarSign />,
      borderClass: "border-green-500",
      textClass: "text-green-500",
    },
    {
      title: "Orders",
      value: "48",
      icon: <FaBoxes />,
      borderClass: "border-blue-500",
      textClass: "text-blue-500",
    },
    {
      title: "Pending Payments",
      value: "$8,500",
      icon: <FaExclamationTriangle />,
      borderClass: "border-red-500",
      textClass: "text-red-500",
    },
  ];

  const getKPIs = () => {
    if (role === "Administrator") return adminKPIs;
    if (role === "Inventory Manager") return inventoryKPIs;
    if (role === "Sales Manager") return salesKPIs;
    return adminKPIs;
  };

  const getQuickActions = () => {
    if (role === "Administrator") {
      return [
        { label: "Add Product", icon: <FaPlus /> },
        { label: "Add Supplier", icon: <FaTruck /> },
        { label: "Create User", icon: <FaUsers /> },
        { label: "Generate Report", icon: <FaChartBar /> },
      ];
    }
    if (role === "Inventory Manager") {
      return [
        { label: "Add Product", icon: <FaPlus /> },
        { label: "Update Stock", icon: <FaSyncAlt /> },
        { label: "Add Supplier", icon: <FaTruck /> },
        { label: "Generate Report", icon: <FaChartBar /> },
      ];
    }
    if (role === "Sales Manager") {
      return [
        { label: "Record Sale", icon: <FaReceipt /> },
        { label: "Generate Invoice", icon: <FaReceipt /> },
        { label: "Export Sales", icon: <FaReceipt /> },
        { label: "View Reports", icon: <FaChartBar /> },
      ];
    }
    return [];
  };

  const getRoleTitle = () => {
    if (role === "Administrator") return "Administrator Dashboard";
    if (role === "Inventory Manager") return "Inventory Manager Dashboard";
    if (role === "Sales Manager") return "Sales Manager Dashboard";
    return "Dashboard Overview";
  };

  return (
    <div className="dashboard-app-container">
      <Navbar />
      <div className="dashboard-layout">
        <Sidebar />
        <main className="dashboard-content">
          <header className="dashboard-header">
            <h1 className="dashboard-page-title">{getRoleTitle()}</h1>
            <p className="dashboard-subtitle">
              Real-time metrics and operations tailored for your role.
            </p>
          </header>

          <section className="dashboard-kpi-container">
            {getKPIs().map((kpi, index) => (
              <KPICard
                key={index}
                title={kpi.title}
                value={kpi.value}
                icon={kpi.icon}
                borderClass={kpi.borderClass}
                textClass={kpi.textClass}
              />
            ))}
          </section>

          <section className="dashboard-charts-container">
            <InventoryChart title="Sales Trends (Last 6 Months)" />
            <div className="dashboard-quick-actions">
              <h3 className="dashboard-actions-title">Quick Actions</h3>
              <div className="dashboard-actions-grid">
                {getQuickActions().map((action, index) => (
                  <button key={index} className="dashboard-action-btn">
                    {action.icon} {action.label}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
