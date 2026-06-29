import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
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
import ProtectedRoute from "./components/ProtectedRoute";
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
            <Dashboard role="Administrator" />
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
          <ProtectedRoute>
            <ProductManagement />
          </ProtectedRoute>
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
          <ProtectedRoute>
            <SupplierManagement />
          </ProtectedRoute>
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
