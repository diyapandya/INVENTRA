# Inventra Dashboard & Role-Based Access Implementation Prompt
Act as a **Senior Product Designer, Senior MERN Stack Developer, and UI/UX Architect** with experience building enterprise SaaS products like **Zoho Inventory, Oracle NetSuite, SAP Business One, Odoo, Monday.com, and Linear**.

Build the dashboard system for **Inventra – Inventory Intelligence System** based on the provided README and UI reference images.

---

# Authentication Requirements
Implement a secure authentication system using **JWT Authentication** and **Role-Based Access Control (RBAC)**.

### Registration Rules

- A user **must register before logging in.**
- **No user should be able to log in without an existing account.**
- Login must validate credentials from the database.
- Passwords must be hashed using bcrypt.
- Generate JWT token after successful login.
- Store token securely.
- Protect all private routes.
- Redirect unauthenticated users to Login.
- Prevent authenticated users from accessing Login/Register pages.

---

# User Roles
There should be only **three roles**:

1. Administrator
2. Inventory Manager
3. Sales Manager
The role is assigned by the Administrator.

After login, users should automatically be redirected to **their respective dashboard**.

---

# Dashboard Design Requirements
The UI should be inspired by the provided reference images.

Design language:

- Modern SaaS Dashboard
- Clean white interface
- Large rounded cards
- Soft shadows
- Spacious layout
- Minimalistic icons
- Interactive charts
- Professional tables
- Responsive design
- Smooth hover animations
- Glass-like modals
- Beautiful empty states
Do NOT copy the reference exactly.

Create a unique design inspired by them.

---

# Administrator Dashboard
Administrator has access to the entire system.

## Sidebar
Dashboard

Users

Products

Inventory

Suppliers

Sales

Reports & Analytics

Forecasting

Settings

Profile

Logout

---

## KPI Cards
Total Users

Total Products

Total Inventory Value

Total Suppliers

Total Sales

Revenue

Pending Orders

Low Stock Items

---

## Charts
Monthly Sales

Revenue Trend

Inventory Status

Supplier Performance

Product Categories

Demand Forecast

Top Selling Products

Recent Activities Timeline

---

## Tables
Recent Products

Latest Sales

Low Stock Products

Recent Registered Users

Supplier List

---

## Quick Actions
Add Product

Add Supplier

Create User

Generate Report

Export Data

Import Products

---

# Inventory Manager Dashboard
Inventory Manager only manages inventory-related modules.

## Sidebar
Dashboard

Products

Inventory

Suppliers

Stock Movement

Categories

Reports

Profile

Logout

---

## KPI Cards
Total Products

Available Stock

Low Stock Products

Out of Stock Products

Today's Stock Entries

Suppliers

Inventory Value

Pending Reorders

---

## Charts
Inventory Status

Category Distribution

Stock Movement

Monthly Inventory Updates

Low Stock Analysis

Warehouse Distribution

---

## Tables
Recent Products

Stock History

Supplier List

Inventory Logs

Reorder List

---

## Quick Actions
Add Product

Update Stock

Add Supplier

Import Inventory

Generate Inventory Report

---

# Sales Manager Dashboard
Sales Manager should only see sales-related information.

## Sidebar
Dashboard

Sales

Invoices

Customers

Revenue

Reports

Profile

Logout

---

## KPI Cards
Today's Sales

Monthly Revenue

Orders

Invoices

Products Sold

Average Order Value

Top Customer

Pending Payments

---

## Charts
Sales Trend

Revenue Trend

Top Selling Products

Monthly Orders

Payment Status

Customer Purchase Analysis

---

## Tables
Recent Sales

Invoices

Top Customers

Best Selling Products

Pending Payments

---

## Quick Actions
Record Sale

Generate Invoice

Export Sales

View Reports

---

# Role Permissions

## Administrator
✅ Manage Users

✅ Manage Products

✅ Manage Inventory

✅ Manage Suppliers

✅ Manage Sales

✅ View Analytics

✅ Generate Reports

✅ Demand Forecasting

✅ Settings

---

## Inventory Manager
✅ Products

✅ Inventory

✅ Suppliers

✅ Categories

✅ Inventory Reports

❌ Users

❌ Sales

❌ System Settings

---

## Sales Manager
✅ Sales

✅ Customers

✅ Invoices

✅ Revenue

✅ Sales Reports

❌ Products CRUD

❌ Inventory Management

❌ User Management

---

# Common Dashboard Components
Every dashboard should include:

Top Navbar

Global Search

Notifications

Dark Mode Toggle (optional)

Profile Dropdown

Breadcrumb Navigation

Date Filter

Export Button

Responsive Sidebar

Recent Activity

---

# Charts
Use Recharts or Chart.js.

Include:

Bar Chart

Line Chart

Pie Chart

Area Chart

Donut Chart

Progress Cards

Mini Sparkline Charts

---

# Tables
Every table should include:

Pagination

Sorting

Filtering

Search

Status Badges

Action Menu

Row Selection

Responsive Design

---

# Modal Design
All Create/Edit forms should open inside modern centered modals.

Include:

Soft background blur

Rounded corners

Proper spacing

Input validation

Cancel

Save

Close button

---

# Responsive Design
Support:

Desktop

Laptop

Tablet

Mobile

Collapsible Sidebar

Responsive Tables

Scrollable Charts

Responsive Cards

---

# UI Guidelines
Use the project color palette.

Large border radius (16–20px)

Soft shadows

Minimal borders

Professional typography

Consistent spacing

Rounded buttons

Hover animations

Loading skeletons

Empty state illustrations

Toast notifications

Confirmation dialogs before delete

---

# Development Guidelines

- Use React.js with React Router DOM.
- Use Tailwind CSS **without using `@apply`**.
- Keep styling clean and maintainable.
- Use separate CSS files only for custom animations or styles; do not use Tailwind's `@apply`.
- Write reusable React components.
- Create separate layouts for each role.
- Implement protected routes based on JWT and user role.
- Hide unauthorized sidebar items and routes.
- Validate all forms on both frontend and backend.
- After implementation, install any required dependencies automatically.
- Run the frontend using:

```
npm run dev
```
- Run the backend using:

```
npm start
```
- Resolve all build, linting, and runtime errors before considering the implementation complete.
The final result should resemble a premium enterprise inventory management application with a polished, modern UI inspired by the provided reference images while remaining unique to the Inventra brand.