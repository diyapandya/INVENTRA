import React, { useState } from "react";
import { FaEnvelope, FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Unable to send password reset link.");
        return;
      }

      setMessage(
        data.message ||
          "If this email exists, a reset link has been sent. Check your inbox.",
      );
    } catch (err) {
      setError("Unable to send password reset link. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-section">
          <FaWarehouse className="login-logo-icon" />
          <span className="login-logo-text">Inventra</span>
        </div>
        <h2 className="login-title">Forgot Password</h2>
        <p className="login-subtitle">
          Enter your email address to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
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

          {error && <div className="form-error">{error}</div>}
          {message && <div className="form-success">{message}</div>}

          <button type="submit" className="login-btn">
            <FaEnvelope className="mr-2" /> Send Reset Link
          </button>
        </form>

        <div className="login-footer">
          <span>
            Remembered your password?{" "}
            <Link to="/login" className="login-link">
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
