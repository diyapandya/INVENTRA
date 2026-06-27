import React from "react";
import {
  FaChartLine,
  FaBoxOpen,
  FaClipboardList,
  FaTruck,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";
import "./Sidebar.css";

/**
 * Sidebar component containing navigation links for Inventra.
 * Employs react-icons and local styling.
 */
import { useAuth } from "../contexts/AuthContext";

function Sidebar() {
  const { user } = useAuth();

  const baseItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaChartLine /> },
  ];

  const inventoryItems = [
    { name: "Products", path: "/products", icon: <FaBoxOpen /> },
    { name: "Inventory", path: "/inventory", icon: <FaClipboardList /> },
    { name: "Suppliers", path: "/suppliers", icon: <FaTruck /> },
  ];

  const salesItems = [
    { name: "Sales", path: "/sales", icon: <FaDollarSign /> },
  ];

  const adminItems = [
    { name: "Users", path: "/users", icon: <FaUsers /> },
    { name: "Reports", path: "/dashboard/admin", icon: <FaChartLine /> },
  ];

  const menuItems = [...baseItems];

  if (user && ["Administrator", "Inventory Manager"].includes(user.role)) {
    menuItems.push(...inventoryItems);
  }

  if (user && ["Administrator", "Sales Manager"].includes(user.role)) {
    menuItems.push(...salesItems);
  }

  if (user && user.role === "Administrator") {
    menuItems.push(...adminItems);
  }

  return (
    <aside className="sidebar-container">
      <ul className="sidebar-list">
        {menuItems.map((item, idx) => (
          <li key={idx} className="sidebar-item">
            <a href={item.path} className="sidebar-link">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
