# Inventra Project — Final Walkthrough

## What Was Done

The complete **Inventra Inventory Management System** folder structure has been set up with a `client/` React frontend and `server/` Express backend.

---

## Final Folder Structure

```
Inventra/
├── client/
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   └── src/
│       ├── index.js                 # React entry point
│       ├── index.css                # Tailwind @tailwind imports
│       ├── App.jsx                  # Route switching shell
│       ├── components/
│       │   ├── Navbar.jsx + .css    # Top header bar (react-icons)
│       │   ├── Sidebar.jsx + .css   # Left navigation (react-icons)
│       │   ├── KPICard.jsx + .css   # Metric display cards (react-icons)
│       │   └── InventoryChart.jsx + .css  # SVG bar chart
│       └── pages/
│           ├── Dashboard.jsx + .css
│           ├── ProductManagement.jsx + .css
│           ├── InventoryManagement.jsx + .css
│           ├── SupplierManagement.jsx + .css
│           ├── SalesManagement.jsx + .css
│           ├── Login.jsx + .css
│           └── Register.jsx + .css
│
└── server/
    ├── .env.example                 # Environment variable template
    ├── app.js                       # Express app setup
    ├── server.js                    # dotenv + MongoDB + listener
    ├── config/
    │   └── db.js                    # Mongoose connection helper
    ├── models/
    │   ├── Product.js               # Mongoose product schema
    │   ├── User.js                  # Mongoose user + cart schema
    │   ├── Order.js                 # Mongoose order schema
    │   ├── Cart.js                  # Cart helper class
    │   ├── DarkStore.js             # DarkStore location model
    │   └── DeliveryPartner.js       # Delivery partner model
    ├── routes/
    │   ├── authRoutes.js            # /api/auth (register, login)
    │   ├── productRoutes.js         # /api/products (CRUD)
    │   ├── inventoryRoutes.js       # /api/inventory (stock + replenish)
    │   └── orderRoutes.js           # /api/orders (place + list)
    └── services/
        ├── InventoryStore.js        # DBInventoryStore class
        ├── InventoryManager.js      # Stock management coordinator
        ├── ReplenishStrategy.js     # Threshold + Weekly strategies
        ├── DarkStoreManager.js      # Singleton store registry
        └── OrderManager.js          # Singleton order processor
```

---

## Setup Instructions

### 1. Configure Environment

Copy the example `.env` file and replace the MongoDB connection string:

```bash
cp server/.env.example server/.env
```

Then edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/inventra
```

### 2. Install Backend Dependencies

```bash
cd server
npm install express cors dotenv mongoose
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install react react-dom react-scripts react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 4. Run Both Servers

**Backend** (from `server/`):
```bash
node server.js
```

**Frontend** (from `client/`):
```bash
npm start
```

---

## Key Design Decisions

| Topic | Decision |
|---|---|
| **Icons** | `react-icons` (FontAwesome — `fa` set) — no emoji |
| **Styling** | Each `.jsx` file has a paired `.css` file using Tailwind `@apply` |
| **State** | React `useState` hooks — ready to connect to backend API |
| **Database** | Mongoose schemas with `timestamps: true` for audit trails |
| **Server Entry** | `dotenv.config()` in `server.js` before any imports |
| **Route Structure** | `/api/auth`, `/api/products`, `/api/inventory`, `/api/orders` |

---

## Files Quick Reference

| File | Link |
|---|---|
| `.env.example` | [.env.example](file:///c:/Websites/Inventra/server/.env.example) |
| `db.js` | [db.js](file:///c:/Websites/Inventra/server/config/db.js) |
| `server.js` | [server.js](file:///c:/Websites/Inventra/server/server.js) |
| `tailwind.config.js` | [tailwind.config.js](file:///c:/Websites/Inventra/client/tailwind.config.js) |
| `App.jsx` | [App.jsx](file:///c:/Websites/Inventra/client/src/App.jsx) |
| `Dashboard.jsx` | [Dashboard.jsx](file:///c:/Websites/Inventra/client/src/pages/Dashboard.jsx) |
| `Login.jsx` | [Login.jsx](file:///c:/Websites/Inventra/client/src/pages/Login.jsx) |
| `Navbar.jsx` | [Navbar.jsx](file:///c:/Websites/Inventra/client/src/components/Navbar.jsx) |
