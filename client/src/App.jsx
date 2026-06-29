import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductManagement from "./pages/ProductManagement";
import InventoryManagement from "./pages/InventoryManagement";
import SupplierManagement from "./pages/SupplierManagement";
import SalesManagement from "./pages/SalesManagement";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SalesManagerDashboard from "./pages/SalesManager/Dashboard";
import Orders from "./pages/SalesManager/Orders";
import Customers from "./pages/SalesManager/Customers";
import Invoices from "./pages/SalesManager/Invoices";
import Revenue from "./pages/SalesManager/Revenue";
import Reports from "./pages/SalesManager/Reports";
import Profile from "./pages/SalesManager/Profile";
import SalesManagerProducts from "./pages/SalesManager/Products";
import SalesManagerCategories from "./pages/SalesManager/Categories";
import SalesManagerSuppliers from "./pages/SalesManager/Suppliers";
import SalesManagerInventory from "./pages/SalesManager/Inventory";
import SalesManagerAnalytics from "./pages/SalesManager/Analytics";
import SalesManagerForecasting from "./pages/SalesManager/Forecasting";
import InventoryManagerDashboard from "./pages/InventoryManager/Dashboard";
import InventoryManagerProducts from "./pages/InventoryManager/Products";
import InventoryManagerCategories from "./pages/InventoryManager/Categories";
import InventoryManagerBrands from "./pages/InventoryManager/Brands";
import InventoryManagerInventory from "./pages/InventoryManager/Inventory";
import InventoryManagerStockMovement from "./pages/InventoryManager/StockMovement";
import InventoryManagerSuppliers from "./pages/InventoryManager/Suppliers";
import InventoryManagerPurchaseOrders from "./pages/InventoryManager/PurchaseOrders";
import InventoryManagerReports from "./pages/InventoryManager/Reports";
import InventoryManagerProfile from "./pages/InventoryManager/Profile";
import InventoryManagerOrders from "./pages/InventoryManager/Orders";
import InventoryManagerCustomers from "./pages/InventoryManager/Customers";
import InventoryManagerAnalytics from "./pages/InventoryManager/Analytics";
import InventoryManagerForecasting from "./pages/InventoryManager/Forecasting";
import AdministratorDashboard from "./pages/Administrator/Dashboard";
import AdministratorUsers from "./pages/Administrator/Users";
import AdministratorRoles from "./pages/Administrator/Roles";
import AdministratorProducts from "./pages/Administrator/Products";
import AdministratorCategories from "./pages/Administrator/Categories";
import AdministratorBrands from "./pages/Administrator/Brands";
import AdministratorInventory from "./pages/Administrator/Inventory";
import AdministratorStockMovement from "./pages/Administrator/StockMovement";
import AdministratorWarehouses from "./pages/Administrator/Warehouses";
import AdministratorSuppliers from "./pages/Administrator/Suppliers";
import AdministratorOrders from "./pages/Administrator/Orders";
import AdministratorCustomers from "./pages/Administrator/Customers";
import AdministratorInvoices from "./pages/Administrator/Invoices";
import AdministratorAnalyticsDashboard from "./pages/Administrator/AnalyticsDashboard";
import AdministratorReports from "./pages/Administrator/Reports";
import AdministratorForecasting from "./pages/Administrator/Forecasting";
import AdministratorSettings from "./pages/Administrator/Settings";
import AdministratorProfile from "./pages/Administrator/Profile";
import RoleRoute from "./components/RoleRoute";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function RedirectToDashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  switch (user.role) {
    case "Administrator":
      return <Navigate to="/dashboard/admin" replace />;
    case "Inventory Manager":
      return <Navigate to="/dashboard/inventory" replace />;
    case "Sales Manager":
      return <Navigate to="/dashboard/sales" replace />;
    default:
      return <Navigate to="/dashboard" replace />;
  }
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <RedirectToDashboard />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Register />}
      />
      <Route
        path="/forgot-password"
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <ForgotPassword />
        }
      />
      <Route
        path="/reset-password"
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <ResetPassword />
        }
      />

      <Route
        path="/dashboard/admin"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorDashboard />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/users"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorUsers />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/roles"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorRoles />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/products"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorProducts />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/categories"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorCategories />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/brands"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorBrands />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/inventory"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorInventory />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/stock-movement"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorStockMovement />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/warehouses"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorWarehouses />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/suppliers"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorSuppliers />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/orders"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorOrders />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/customers"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorCustomers />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/invoices"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorInvoices />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/analytics-dashboard"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorAnalyticsDashboard />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/reports"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorReports />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/forecasting"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorForecasting />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/settings"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorSettings />
          </RoleRoute>
        }
      />
      <Route
        path="/administrator/profile"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <AdministratorProfile />
          </RoleRoute>
        }
      />
      <Route
        path="/dashboard/inventory"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerDashboard />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/products"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerProducts />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/categories"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerCategories />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/brands"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerBrands />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/inventory"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerInventory />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/stock-movement"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerStockMovement />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/suppliers"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerSuppliers />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/purchase-orders"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerPurchaseOrders />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/reports"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerReports />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/orders"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerOrders />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/customers"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerCustomers />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/analytics"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerAnalytics />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/forecasting"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerForecasting />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory-manager/profile"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagerProfile />
          </RoleRoute>
        }
      />
      <Route
        path="/dashboard/sales"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <SalesManagerDashboard />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/orders"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <Orders />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/products"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <SalesManagerProducts />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/categories"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <SalesManagerCategories />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/suppliers"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <SalesManagerSuppliers />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/inventory"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <SalesManagerInventory />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/customers"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <Customers />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/invoices"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <Invoices />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/revenue"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <Revenue />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/reports"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <Reports />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/analytics"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <SalesManagerAnalytics />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/forecasting"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <SalesManagerForecasting />
          </RoleRoute>
        }
      />
      <Route
        path="/sales-manager/profile"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <Profile />
          </RoleRoute>
        }
      />
      <Route
        path="/products"
        element={
          <RoleRoute allowedRoles={["Administrator", "Inventory Manager"]}>
            <ProductManagement />
          </RoleRoute>
        }
      />
      <Route
        path="/inventory"
        element={
          <RoleRoute allowedRoles={["Inventory Manager", "Administrator"]}>
            <InventoryManagement />
          </RoleRoute>
        }
      />
      <Route
        path="/suppliers"
        element={
          <RoleRoute allowedRoles={["Administrator", "Inventory Manager"]}>
            <SupplierManagement />
          </RoleRoute>
        }
      />
      <Route
        path="/sales"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <SalesManagement />
          </RoleRoute>
        }
      />
      <Route
        path="/users"
        element={
          <RoleRoute allowedRoles={["Administrator"]}>
            <Users />
          </RoleRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
