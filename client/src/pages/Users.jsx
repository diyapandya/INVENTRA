import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import "./Users.css";

function Users() {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const body = await response.json();
          setError(body.error || "Unable to load users.");
          return;
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Unable to load users.");
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div className="users-app-container">
      <Navbar />
      <div className="users-layout">
        <Sidebar />
        <main className="users-content">
          <header className="users-header">
            <h1 className="users-title">User Management</h1>
            <p className="users-subtitle">
              Manage system access and user roles from the administrator
              console.
            </p>
          </header>

          <div className="users-card">
            <h2 className="users-card-title">Registered Users</h2>
            {error && <div className="users-error">{error}</div>}
            <div className="users-table-wrap">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="users-empty">
                        No users available.
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Users;
