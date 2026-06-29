import React, { useEffect, useState } from "react";
import { FaLock, FaWarehouse } from "react-icons/fa";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const query = useQuery();

  useEffect(() => {
    const urlToken = query.get("token") || "";
    setToken(urlToken);
  }, [query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!token) {
      setError("Reset token is missing or invalid.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Unable to reset password.");
        return;
      }

      setMessage(
        data.message || "Password reset successful. You can now sign in.",
      );
      setTimeout(() => navigate("/login", { replace: true }), 1800);
    } catch (err) {
      setError("Unable to reset password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-section">
          <FaWarehouse className="login-logo-icon" />
          <span className="login-logo-text">Inventra</span>
        </div>
        <h2 className="login-title">Reset Password</h2>
        <p className="login-subtitle">Enter your new password to continue.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          {error && <div className="form-error">{error}</div>}
          {message && <div className="form-success">{message}</div>}

          <button type="submit" className="login-btn">
            <FaLock className="mr-2" /> Reset Password
          </button>
        </form>

        <div className="login-footer">
          <span>
            Back to{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
