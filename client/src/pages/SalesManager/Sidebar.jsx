import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBoxes,
  FaChartLine,
  FaChartPie,
  FaDollarSign,
  FaFileAlt,
  FaFileInvoice,
  FaTags,
  FaShoppingCart,
  FaTruck,
  FaUser,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa";
import "./Sidebar.css";

const menuItems = [
  { name: "Dashboard", path: "/dashboard/sales", icon: <FaChartLine /> },
  { name: "Products", path: "/sales-manager/products", icon: <FaBoxes /> },
  { name: "Categories", path: "/sales-manager/categories", icon: <FaTags /> },
  { name: "Suppliers", path: "/sales-manager/suppliers", icon: <FaTruck /> },
  {
    name: "Inventory",
    path: "/sales-manager/inventory",
    icon: <FaWarehouse />,
  },
  { name: "Sales", path: "/sales", icon: <FaDollarSign /> },
  { name: "Orders", path: "/sales-manager/orders", icon: <FaShoppingCart /> },
  { name: "Customers", path: "/sales-manager/customers", icon: <FaUsers /> },
  {
    name: "Invoices",
    path: "/sales-manager/invoices",
    icon: <FaFileInvoice />,
  },
  { name: "Revenue", path: "/sales-manager/revenue", icon: <FaDollarSign /> },
  { name: "Reports", path: "/sales-manager/reports", icon: <FaFileAlt /> },
  { name: "Analytics", path: "/sales-manager/analytics", icon: <FaChartPie /> },
  {
    name: "Forecasting",
    path: "/sales-manager/forecasting",
    icon: <FaChartLine />,
  },
  { name: "Profile", path: "/sales-manager/profile", icon: <FaUser /> },
];

function SalesManagerSidebar() {
  return (
    <aside className="sales-manager-sidebar">
      <div className="sales-manager-sidebar__brand">Sales Manager</div>
      <nav aria-label="Sales manager navigation">
        <ul className="sales-manager-sidebar__list">
          {menuItems.map((item) => (
            <li key={item.path} className="sales-manager-sidebar__item">
              <NavLink
                to={item.path}
                end={item.path === "/dashboard/sales"}
                className={({ isActive }) =>
                  `sales-manager-sidebar__link${isActive ? " active" : ""}`
                }
              >
                <span className="sales-manager-sidebar__icon">{item.icon}</span>
                <span className="sales-manager-sidebar__text">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SalesManagerSidebar;
