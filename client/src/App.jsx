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
            <Dashboard role="Inventory Manager" />
          </RoleRoute>
        }
      />
      <Route
        path="/dashboard/sales"
        element={
          <RoleRoute allowedRoles={["Sales Manager", "Administrator"]}>
            <Dashboard role="Sales Manager" />
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
