import React, { useState } from "react";
import { FaWarehouse, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css";

/**
 * Login Page
 * User authorization gateway.
 */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Login failed.");
        return;
      }

      login(data.user, data.token);
      const rolePath =
        data.user.role === "Administrator"
          ? "/dashboard/admin"
          : data.user.role === "Sales Manager"
            ? "/dashboard/sales"
            : "/dashboard/inventory";
      navigate(rolePath, { replace: true });
    } catch (err) {
      setError("Unable to login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-section">
          <FaWarehouse className="login-logo-icon" />
          <span className="login-logo-text">Inventra</span>
        </div>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">
          Log in to manage your inventory metrics
        </p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="name@company.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="login-btn">
            <FaSignInAlt className="mr-2" /> Sign In
          </button>
        </form>

        <div className="login-footer">
          <span>
            Don't have an account?{" "}
            <a href="/register" className="login-link">
              Register here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
