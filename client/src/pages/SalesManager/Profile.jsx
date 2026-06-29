import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "../../contexts/AuthContext";
import { FaUser, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "./Profile.css";

function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "Sales Manager",
    email: user?.email || "sales@inventra.com",
    phone: "+1 (555) 123-4567",
    department: "Sales",
    role: user?.role || "Sales Manager",
    joinDate: "2024-01-15",
    location: "New York, USA",
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(profileData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-layout">
        <Sidebar />
        <main className="profile-main">
          <header className="profile-header">
            <h1>
              <FaUser className="mr-2" /> My Profile
            </h1>
          </header>

          <div className="profile-card">
            <div className="profile-header-section">
              <div className="profile-avatar">
                <FaUser />
              </div>
              <div className="profile-title">
                <h2>{profileData.name}</h2>
                <p className="profile-role">{profileData.role}</p>
              </div>
              <div className="profile-actions">
                {!isEditing ? (
                  <button className="btn-edit" onClick={handleEdit}>
                    <FaEdit /> Edit Profile
                  </button>
                ) : (
                  <>
                    <button className="btn-save" onClick={handleSave}>
                      <FaSave /> Save
                    </button>
                    <button className="btn-cancel" onClick={handleCancel}>
                      <FaTimes /> Cancel
                    </button>
                  </>
                )}
              </div>
            </div>

            {!isEditing ? (
              <div className="profile-details">
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{profileData.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{profileData.phone}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Department:</span>
                  <span className="detail-value">{profileData.department}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{profileData.location}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Join Date:</span>
                  <span className="detail-value">{profileData.joinDate}</span>
                </div>
              </div>
            ) : (
              <div className="profile-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={editData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <input
                    type="text"
                    name="department"
                    value={editData.department}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={editData.location}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Performance Stats */}
          <section className="performance-section">
            <h2>Performance Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Sales</h3>
                <p className="stat-value">$89,450.75</p>
              </div>
              <div className="stat-card">
                <h3>Total Orders</h3>
                <p className="stat-value">1,250</p>
              </div>
              <div className="stat-card">
                <h3>Customers Served</h3>
                <p className="stat-value">245</p>
              </div>
              <div className="stat-card">
                <h3>Average Order</h3>
                <p className="stat-value">$71.56</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Profile;
