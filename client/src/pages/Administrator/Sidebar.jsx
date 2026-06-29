import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBoxOpen,
  FaBoxes,
  FaBuilding,
  FaChartLine,
  FaChartPie,
  FaClipboardList,
  FaCog,
  FaExchangeAlt,
  FaFileAlt,
  FaFileInvoice,
  FaIdBadge,
  FaLayerGroup,
  FaShoppingCart,
  FaTags,
  FaTruck,
  FaUser,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa";
import "./Sidebar.css";

const groups = [
  {
    label: null,
    items: [{ name: "Dashboard", path: "/dashboard/admin", icon: <FaChartLine /> }],
  },
  {
    label: "User Management",
    items: [
      { name: "Users", path: "/administrator/users", icon: <FaUsers /> },
      { name: "Roles", path: "/administrator/roles", icon: <FaIdBadge /> },
    ],
  },
  {
    label: "Product Management",
    items: [
      { name: "Products", path: "/administrator/products", icon: <FaBoxOpen /> },
      { name: "Categories", path: "/administrator/categories", icon: <FaTags /> },
      { name: "Brands", path: "/administrator/brands", icon: <FaLayerGroup /> },
    ],
  },
  {
    label: "Inventory",
    items: [
      { name: "Inventory", path: "/administrator/inventory", icon: <FaBoxes /> },
      {
        name: "Stock Movement",
        path: "/administrator/stock-movement",
        icon: <FaExchangeAlt />,
      },
      { name: "Warehouses", path: "/administrator/warehouses", icon: <FaWarehouse /> },
    ],
  },
  {
    label: null,
    items: [{ name: "Suppliers", path: "/administrator/suppliers", icon: <FaTruck /> }],
  },
  {
    label: "Sales",
    items: [
      { name: "Orders", path: "/administrator/orders", icon: <FaShoppingCart /> },
      { name: "Customers", path: "/administrator/customers", icon: <FaUsers /> },
      { name: "Invoices", path: "/administrator/invoices", icon: <FaFileInvoice /> },
    ],
  },
  {
    label: "Analytics",
    items: [
      {
        name: "Dashboard",
        path: "/administrator/analytics-dashboard",
        icon: <FaChartPie />,
      },
      { name: "Reports", path: "/administrator/reports", icon: <FaFileAlt /> },
      {
        name: "Forecasting",
        path: "/administrator/forecasting",
        icon: <FaClipboardList />,
      },
    ],
  },
  {
    label: null,
    items: [
      { name: "Settings", path: "/administrator/settings", icon: <FaCog /> },
      { name: "Profile", path: "/administrator/profile", icon: <FaUser /> },
    ],
  },
];

function AdministratorSidebar() {
  return (
    <aside className="administrator-sidebar">
      <div className="administrator-sidebar__brand">Administrator</div>
      <nav aria-label="Administrator navigation">
        {groups.map((group, index) => (
          <div className="administrator-sidebar__group" key={group.label || index}>
            {group.label && (
              <div className="administrator-sidebar__group-label">{group.label}</div>
            )}
            <ul className="administrator-sidebar__list">
              {group.items.map((item) => (
                <li className="administrator-sidebar__item" key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/dashboard/admin"}
                    className={({ isActive }) =>
                      `administrator-sidebar__link${isActive ? " active" : ""}`
                    }
                  >
                    <span className="administrator-sidebar__icon">{item.icon}</span>
                    <span className="administrator-sidebar__text">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default AdministratorSidebar;
