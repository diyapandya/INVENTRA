import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaDollarSign,
  FaFileAlt,
  FaFileInvoice,
  FaShoppingCart,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import "./Sidebar.css";

const menuItems = [
  { name: "Dashboard", path: "/dashboard/sales", icon: <FaChartLine /> },
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
