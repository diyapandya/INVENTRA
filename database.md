# Database Schema

This file gives the database schema for Inventra.

Database: MongoDB Atlas

Project focus: Electronic inventory items only.

In MongoDB, tables are called collections.
Below, each collection is written like a table name with its schema.

## 1. users

This collection stores login users.

Schema:

```js
{
  _id: ObjectId,
  name: String,
  email: String,
  passwordHash: String,
  phone: String,
  role: "Administrator" | "Inventory Manager" | "Sales Manager",
  status: "active" | "inactive",
  lastLoginAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `email` must be unique.
- Password should never be stored directly.
- Store encrypted password in `passwordHash`.

## 2. roles

This collection stores role permissions.

Schema:

```js
{
  _id: ObjectId,
  roleName: "Administrator" | "Inventory Manager" | "Sales Manager",
  permissions: {
    dashboard: String,
    users: String,
    products: String,
    categories: String,
    suppliers: String,
    inventory: String,
    purchaseOrders: String,
    orders: String,
    customers: String,
    reports: String,
    analytics: String,
    forecasting: String,
    settings: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

Example permission values:

- `full`
- `manage`
- `read`
- `limited`
- `none`

## 3. categories

This collection stores electronic product categories.

Schema:

```js
{
  _id: ObjectId,
  name: String,
  description: String,
  status: "active" | "inactive",
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

Example categories:

- Mobiles
- Laptops
- Headphones
- Cameras
- Smart Watches
- Televisions
- Computer Accessories
- Gaming Accessories
- Home Appliances

## 4. brands

This collection stores electronic brands.

Schema:

```js
{
  _id: ObjectId,
  name: String,
  website: String,
  supportEmail: String,
  supportPhone: String,
  status: "active" | "inactive",
  createdAt: Date,
  updatedAt: Date
}
```

Example brands:

- Samsung
- Apple
- Sony
- Dell
- HP
- Lenovo
- LG
- Boat
- JBL

## 5. products

This collection stores electronic products.

Schema:

```js
{
  _id: ObjectId,
  sku: String,
  barcode: String,
  name: String,
  description: String,
  categoryId: ObjectId,
  brandId: ObjectId,
  modelNumber: String,
  serialNumberRequired: Boolean,
  warrantyMonths: Number,
  color: String,
  specifications: {
    processor: String,
    ram: String,
    storage: String,
    screenSize: String,
    battery: String,
    powerRating: String,
    connectivity: [String]
  },
  purchasePrice: Number,
  sellingPrice: Number,
  taxPercent: Number,
  reorderLevel: Number,
  reorderQuantity: Number,
  productImage: String,
  status: "active" | "inactive" | "discontinued",
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `sku` must be unique.
- `barcode` should be unique if used.
- `categoryId` connects to `categories`.
- `brandId` connects to `brands`.

## 6. product_serials

This collection stores serial numbers for electronic items.

Use this for products like laptops, mobiles, cameras, and expensive devices.

Schema:

```js
{
  _id: ObjectId,
  productId: ObjectId,
  serialNumber: String,
  imei1: String,
  imei2: String,
  warehouseId: ObjectId,
  purchaseOrderId: ObjectId,
  orderId: ObjectId,
  status: "in_stock" | "sold" | "returned" | "damaged" | "reserved",
  warrantyStartDate: Date,
  warrantyEndDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `serialNumber` must be unique.
- IMEI fields are mainly for mobile phones.

## 7. warehouses

This collection stores warehouse details.

Schema:

```js
{
  _id: ObjectId,
  name: String,
  code: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  managerName: String,
  phone: String,
  capacityUnits: Number,
  status: "active" | "inactive" | "maintenance",
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `code` must be unique.

## 8. inventory

This collection stores current stock.

Schema:

```js
{
  _id: ObjectId,
  productId: ObjectId,
  warehouseId: ObjectId,
  availableQuantity: Number,
  reservedQuantity: Number,
  damagedQuantity: Number,
  reorderLevel: Number,
  lastStockUpdatedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- One product can exist in many warehouses.
- `availableQuantity` should not become negative.
- Use `stock_movements` to record every stock change.

## 9. stock_movements

This collection stores stock history.

Schema:

```js
{
  _id: ObjectId,
  productId: ObjectId,
  warehouseId: ObjectId,
  movementType: "stock_in" | "stock_out" | "sale" | "return" | "adjustment" | "damage" | "transfer",
  quantity: Number,
  beforeQuantity: Number,
  afterQuantity: Number,
  referenceType: "purchase_order" | "sales_order" | "manual" | "transfer" | "return",
  referenceId: ObjectId,
  reason: String,
  createdBy: ObjectId,
  createdAt: Date
}
```

Rules:

- Every stock increase or decrease should create one stock movement record.

## 10. suppliers

This collection stores supplier details.

Schema:

```js
{
  _id: ObjectId,
  supplierName: String,
  contactPerson: String,
  email: String,
  phone: String,
  alternatePhone: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  gstNumber: String,
  suppliedCategoryIds: [ObjectId],
  suppliedBrandIds: [ObjectId],
  rating: Number,
  status: "active" | "inactive" | "blacklisted",
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `email` should be unique if possible.
- `gstNumber` should be unique if used.

## 11. purchase_orders

This collection stores purchase orders sent to suppliers.

Schema:

```js
{
  _id: ObjectId,
  poNumber: String,
  supplierId: ObjectId,
  warehouseId: ObjectId,
  orderDate: Date,
  expectedDeliveryDate: Date,
  receivedDate: Date,
  items: [
    {
      productId: ObjectId,
      quantity: Number,
      receivedQuantity: Number,
      unitCost: Number,
      taxPercent: Number,
      lineTotal: Number
    }
  ],
  subtotal: Number,
  taxAmount: Number,
  totalAmount: Number,
  status: "draft" | "pending" | "approved" | "partially_received" | "received" | "cancelled",
  notes: String,
  createdBy: ObjectId,
  approvedBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `poNumber` must be unique.
- Inventory should update only when purchase order status becomes `received` or `partially_received`.

## 12. customers

This collection stores customer details.

Schema:

```js
{
  _id: ObjectId,
  customerName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  customerType: "retail" | "business",
  gstNumber: String,
  status: "active" | "inactive",
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `email` should be unique if possible.
- `gstNumber` is mainly for business customers.

## 13. orders

This collection stores sales orders.

Schema:

```js
{
  _id: ObjectId,
  orderNumber: String,
  customerId: ObjectId,
  orderDate: Date,
  items: [
    {
      productId: ObjectId,
      serialIds: [ObjectId],
      quantity: Number,
      unitPrice: Number,
      discount: Number,
      taxPercent: Number,
      lineTotal: Number
    }
  ],
  subtotal: Number,
  discountAmount: Number,
  taxAmount: Number,
  totalAmount: Number,
  paymentStatus: "unpaid" | "partial" | "paid" | "refunded",
  orderStatus: "pending" | "confirmed" | "packed" | "shipped" | "delivered" | "cancelled" | "returned",
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `orderNumber` must be unique.
- Inventory should reduce when order is confirmed or delivered, based on your chosen process.

## 14. invoices

This collection stores invoices.

Schema:

```js
{
  _id: ObjectId,
  invoiceNumber: String,
  orderId: ObjectId,
  customerId: ObjectId,
  invoiceDate: Date,
  dueDate: Date,
  subtotal: Number,
  discountAmount: Number,
  taxAmount: Number,
  totalAmount: Number,
  paidAmount: Number,
  paymentStatus: "unpaid" | "partial" | "paid" | "overdue" | "cancelled",
  paymentMethod: "cash" | "card" | "upi" | "bank_transfer" | "none",
  notes: String,
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

Rules:

- `invoiceNumber` must be unique.
- One order can have one invoice in the simple version.

## 15. payments

This collection stores payment records.

Schema:

```js
{
  _id: ObjectId,
  invoiceId: ObjectId,
  orderId: ObjectId,
  customerId: ObjectId,
  amount: Number,
  paymentMethod: "cash" | "card" | "upi" | "bank_transfer",
  transactionId: String,
  paymentDate: Date,
  status: "success" | "failed" | "pending" | "refunded",
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

## 16. reports

This collection stores generated report records.

Schema:

```js
{
  _id: ObjectId,
  reportName: String,
  reportType: "sales" | "inventory" | "revenue" | "supplier" | "low_stock" | "forecasting",
  dateFrom: Date,
  dateTo: Date,
  filters: Object,
  fileUrl: String,
  generatedBy: ObjectId,
  createdAt: Date
}
```

## 17. activity_logs

This collection stores user activity.

Schema:

```js
{
  _id: ObjectId,
  userId: ObjectId,
  module: String,
  action: String,
  description: String,
  ipAddress: String,
  createdAt: Date
}
```

Examples:

- Product added
- Stock updated
- Invoice generated
- User logged in
- Purchase order approved

## 18. forecasts

This collection stores demand forecasting results.

Schema:

```js
{
  _id: ObjectId,
  productId: ObjectId,
  categoryId: ObjectId,
  forecastMonth: String,
  historicalSales: [Number],
  predictedDemand: Number,
  suggestedReorderQuantity: Number,
  method: "moving_average" | "linear_regression",
  confidence: "low" | "medium" | "high",
  createdAt: Date,
  updatedAt: Date
}
```

## 19. settings

This collection stores system settings.

Schema:

```js
{
  _id: ObjectId,
  key: String,
  value: Object,
  description: String,
  updatedBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

Example settings:

- low stock alert enabled
- default tax percent
- invoice prefix
- purchase order approval required

## Important Relationships

- `products.categoryId` connects to `categories._id`
- `products.brandId` connects to `brands._id`
- `inventory.productId` connects to `products._id`
- `inventory.warehouseId` connects to `warehouses._id`
- `stock_movements.productId` connects to `products._id`
- `purchase_orders.supplierId` connects to `suppliers._id`
- `orders.customerId` connects to `customers._id`
- `orders.items.productId` connects to `products._id`
- `invoices.orderId` connects to `orders._id`
- `payments.invoiceId` connects to `invoices._id`

## Recommended Indexes

Use indexes for faster search.

```js
users: email
products: sku, barcode, name, categoryId, brandId
product_serials: serialNumber, imei1, imei2
inventory: productId, warehouseId
stock_movements: productId, warehouseId, createdAt
suppliers: supplierName, email, gstNumber
purchase_orders: poNumber, supplierId, status
customers: customerName, email, phone
orders: orderNumber, customerId, orderDate, orderStatus
invoices: invoiceNumber, orderId, paymentStatus
activity_logs: userId, module, createdAt
forecasts: productId, forecastMonth
```

## Strict Rules To Follow

- Use ObjectId for relationships.
- Keep `createdAt` and `updatedAt` in almost every collection.
- Do not store plain passwords.
- Keep product SKU unique.
- Keep order number unique.
- Keep invoice number unique.
- Keep purchase order number unique.
- Every stock change must create a stock movement record.
- Do not allow negative stock.
- Use product serial numbers for expensive electronic items.
- Keep role permissions checked on both frontend and backend.
