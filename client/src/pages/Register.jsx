import React, { useState } from "react";
import { FaWarehouse, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Register.css";

/**
 * Register Page
 * Standard system registration.
 */
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Inventory Manager");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Registration failed.");
        return;
      }

      alert("Registration successful! Please log in.");
      navigate("/login", { replace: true });
    } catch (err) {
      setError("Unable to register. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-logo-section">
          <FaWarehouse className="register-logo-icon" />
          <span className="register-logo-text">Inventra</span>
        </div>
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">
          Register to access the dashboard system
        </p>

        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
              placeholder="John Doe"
            />
          </div>
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
          <div className="form-group">
            <label className="form-label">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-select"
            >
              <option value="Inventory Manager">Inventory Manager</option>
              <option value="Sales Manager">Sales Manager</option>
            </select>
          </div>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="register-btn">
            <FaUserPlus className="mr-2" /> Register
          </button>
        </form>

        <div className="register-footer">
          <span>
            Already have an account?{" "}
            <a href="/login" className="register-link">
              Sign In
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
