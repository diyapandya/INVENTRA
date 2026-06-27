# Updated Inventra Setup Plan: Tailwind CSS, MongoDB, & React-Icons

This updated plan transitions the project to support dynamic data via **MongoDB/Mongoose**, applies styling using **Tailwind CSS** with **separate CSS files** (e.g., `Dashboard.jsx` and `Dashboard.css`), and utilizes **`react-icons`** instead of text emojis for the layout.

---

## Proposed Changes

### 1. Database Integration & Configuration

We will introduce MongoDB connectivity using **Mongoose** in the backend for dynamic database storage.

#### [NEW] [.env.example](file:///c:/Websites/Inventra/server/.env.example)
* Contains environment variables setup, including `PORT` and `MONGO_URI`.

#### [NEW] [db.js](file:///c:/Websites/Inventra/server/config/db.js)
* Simple Mongoose connection helper.

#### [MODIFY] [server.js](file:///c:/Websites/Inventra/server/server.js) & [app.js](file:///c:/Websites/Inventra/server/app.js)
* Load `.env` using `dotenv`.
* Connect to MongoDB upon startup.

#### [MODIFY] Models (`server/models/`)
* Re-write or wrap `Product`, `User`, and `Order` as Mongoose schemas.
  * `Product.js`: Mongoose Schema (`sku`, `name`, `price`, `category`, `stock`).
  * `User.js`: Mongoose Schema (`name`, `x`, `y`, `email`, `password`, `role`).
  * `Order.js`: Mongoose Schema (`user`, `items`, `total`, `partners`, `status`).

---

### 2. Frontend Restructuring (`client/`)

We will rename client files from `.js` to `.jsx`, extract styles from inline JS objects into separate `.css` files, and replace emojis with icons from `react-icons`.

#### Rename Files
* Rename `App.js` ➔ `App.jsx`
* Rename `components/*.js` ➔ `components/*.jsx`
* Rename `pages/*.js` ➔ `pages/*.jsx`

#### Icon Library (`react-icons`)
* We will use icons from `react-icons` (e.g., FontAwesome, Material Icons, or Lucide icon integrations) in components like Sidebar, Navbar, and Dashboard KPI cards instead of raw text emojis.

#### [NEW] Associated CSS Files
* Create corresponding CSS files for pages and components containing Tailwind `@apply` directives or utility classes:
  * `client/src/components/Navbar.css`
  * `client/src/components/Sidebar.css`
  * `client/src/components/KPICard.css`
  * `client/src/components/InventoryChart.css`
  * `client/src/pages/Dashboard.css`
  * `client/src/pages/ProductManagement.css`
  * `client/src/pages/InventoryManagement.css`
  * `client/src/pages/SupplierManagement.css`
  * `client/src/pages/SalesManagement.css`
  * `client/src/pages/Login.css`
  * `client/src/pages/Register.css`

#### [NEW] [tailwind.config.js](file:///c:/Websites/Inventra/client/tailwind.config.js)
* Configuration for Tailwind CSS workspace scanning.

#### [MODIFY] [index.css](file:///c:/Websites/Inventra/client/src/index.css)
* Add Tailwind `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` directives.

---

## Verification Plan

### Manual Verification
* Inspect that all pages/components successfully load their styling from their corresponding `.css` files.
* Confirm that `.env.example` contains the correct instructions for configuring MongoDB.
* Check that backend MongoDB connection code loads cleanly.
