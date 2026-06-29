import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBarcode,
  FaBoxes,
  FaBuilding,
  FaChartLine,
  FaChartPie,
  FaClipboardList,
  FaExchangeAlt,
  FaFileAlt,
  FaShoppingBag,
  FaShoppingCart,
  FaTags,
  FaTruck,
  FaUser,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa";
import "./Sidebar.css";

const menuItems = [
  { name: "Dashboard", path: "/dashboard/inventory", icon: <FaChartLine /> },
  { name: "Products", path: "/inventory-manager/products", icon: <FaBoxes /> },
  {
    name: "Categories",
    path: "/inventory-manager/categories",
    icon: <FaTags />,
  },
  { name: "Brands", path: "/inventory-manager/brands", icon: <FaBarcode /> },
  {
    name: "Inventory",
    path: "/inventory-manager/inventory",
    icon: <FaWarehouse />,
  },
  {
    name: "Stock Movement",
    path: "/inventory-manager/stock-movement",
    icon: <FaExchangeAlt />,
  },
  {
    name: "Suppliers",
    path: "/inventory-manager/suppliers",
    icon: <FaTruck />,
  },
  {
    name: "Purchase Orders",
    path: "/inventory-manager/purchase-orders",
    icon: <FaShoppingBag />,
  },
  {
    name: "Orders",
    path: "/inventory-manager/orders",
    icon: <FaShoppingCart />,
  },
  {
    name: "Customers",
    path: "/inventory-manager/customers",
    icon: <FaUsers />,
  },
  { name: "Reports", path: "/inventory-manager/reports", icon: <FaFileAlt /> },
  {
    name: "Analytics",
    path: "/inventory-manager/analytics",
    icon: <FaChartPie />,
  },
  {
    name: "Forecasting",
    path: "/inventory-manager/forecasting",
    icon: <FaClipboardList />,
  },
  { name: "Profile", path: "/inventory-manager/profile", icon: <FaUser /> },
];

function InventoryManagerSidebar() {
  return (
    <aside className="inventory-manager-sidebar">
      <div className="inventory-manager-sidebar__brand">
        Inventory Manager
      </div>
      <nav aria-label="Inventory manager navigation">
        <ul className="inventory-manager-sidebar__list">
          {menuItems.map((item) => (
            <li key={item.path} className="inventory-manager-sidebar__item">
              <NavLink
                to={item.path}
                end={item.path === "/dashboard/inventory"}
                className={({ isActive }) =>
                  `inventory-manager-sidebar__link${
                    isActive ? " active" : ""
                  }`
                }
              >
                <span className="inventory-manager-sidebar__icon">
                  {item.icon}
                </span>
                <span className="inventory-manager-sidebar__text">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default InventoryManagerSidebar;
