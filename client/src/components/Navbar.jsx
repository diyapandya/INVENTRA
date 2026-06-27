import React from "react";
import { FaWarehouse, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";

/**
 * Navbar component for Inventra dashboard header.
 * Uses FontAwesome icons and styling loaded from Navbar.css.
 */
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <FaWarehouse className="navbar-brand-icon" />
        <span>Inventra Intelligence</span>
      </div>
      <div className="navbar-user-section">
        <div className="navbar-user-info">
          <FaUserCircle className="navbar-user-icon" />
          {user ? (
            <span>
              Welcome, <strong>{user.name}</strong> ({user.role})
            </span>
          ) : (
            <span>
              Welcome, <strong>Guest</strong>
            </span>
          )}
        </div>
        {user && (
          <button className="navbar-logout-btn" onClick={logout}>
            <FaSignOutAlt className="mr-1" />
            <span>Logout</span>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
