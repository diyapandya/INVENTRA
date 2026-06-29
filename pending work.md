# Pending Work

This file explains what work is still left in the Inventra project.

The project already has dashboards, sidebars, pages, and role-based routes.
But many pages still use sample data. The next work is to connect everything with the backend and database.

## 1. Backend API Work

Pending work:

- Create proper API routes for all modules.
- Connect frontend pages with backend APIs.
- Add create, read, update, and delete operations.
- Add proper error handling.
- Add validation before saving data.
- Send clear success and error messages to frontend.

Important modules that need API support:

- Users
- Roles
- Products
- Categories
- Brands
- Inventory
- Stock Movement
- Warehouses
- Suppliers
- Purchase Orders
- Orders
- Customers
- Invoices
- Reports
- Analytics
- Forecasting
- Settings

## 2. Database Work

Pending work:

- Create MongoDB schemas for all main modules.
- Use proper relationships between collections.
- Store real data instead of static sample data.
- Add indexes for faster search.
- Add timestamps for every important record.
- Add status fields like `active`, `inactive`, `pending`, and `completed`.

## 3. Authentication Work

Some authentication work exists, but it needs improvement.

Pending work:

- Make JWT login more secure.
- Add token expiry handling.
- Add protected backend routes.
- Add role-based backend permission checks.
- Make forgot password and reset password fully connected with email.
- Add password strength validation.
- Add logout from all devices if needed.

## 4. Role Permission Work

Frontend role routes are added, but backend permission checking is still important.

Pending work:

- Administrator should access everything.
- Inventory Manager should manage inventory-related data.
- Sales Manager should manage sales-related data.
- Sales Manager should only read products, categories, suppliers, and inventory.
- Inventory Manager should only read orders and customers.
- Settings and Users should only be for Administrator.

This permission system should be checked on both frontend and backend.

## 5. Product Management Work

Pending work:

- Add real product form.
- Add edit product feature.
- Add delete product feature.
- Add product image upload.
- Add electronic item fields like brand, model number, warranty, power rating, and serial number.
- Add product search.
- Add product filters.
- Add category and brand dropdowns.

## 6. Inventory Work

Pending work:

- Add stock in and stock out features.
- Maintain stock movement history.
- Show low stock alerts.
- Show out-of-stock alerts.
- Update stock automatically after sales.
- Update stock automatically after purchase order receiving.
- Add warehouse-wise stock.

## 7. Supplier Work

Pending work:

- Add supplier form.
- Add edit supplier feature.
- Add delete supplier feature.
- Connect suppliers with product categories and brands.
- Track supplier performance.
- Track purchase history from each supplier.

## 8. Purchase Order Work

Pending work:

- Create purchase orders.
- Add products inside purchase orders.
- Approve or reject purchase orders.
- Mark purchase orders as received.
- Update inventory after purchase order is received.
- Track pending purchase orders.

## 9. Sales Work

Pending work:

- Create sales orders using real products.
- Reduce inventory after sale.
- Generate invoices from orders.
- Track payment status.
- Show sales history.
- Show product-wise sales.
- Show customer-wise sales.

## 10. Reports and Analytics Work

Pending work:

- Use real database data for reports.
- Add sales reports.
- Add inventory reports.
- Add revenue reports.
- Add supplier reports.
- Add low stock reports.
- Add date filters.
- Add export to PDF or Excel.

## 11. Forecasting Work

Pending work:

- Add demand forecasting logic.
- Use past sales data for prediction.
- Show predicted demand for electronic items.
- Show suggested reorder quantity.
- Add simple charts for future demand.

## 12. UI and UX Work

Pending work:

- Improve color palette.
- Make all pages look consistent.
- Add loading states.
- Add empty states.
- Add confirmation popups before delete.
- Add success and error toast messages.
- Improve mobile responsive design.
- Replace placeholder charts with real charts.

## 13. Testing Work

Pending work:

- Test login and signup.
- Test all role permissions.
- Test each sidebar link.
- Test product add, edit, and delete.
- Test inventory stock update.
- Test sales order and invoice flow.
- Test backend API errors.
- Test database connection.

## 14. Deployment Work

Pending work:

- Deploy frontend on Vercel.
- Deploy backend on Render.
- Connect backend with MongoDB Atlas.
- Add production environment variables.
- Test deployed website.
- Fix CORS issues if they happen.

## Current Pending Summary

The main UI structure is ready.

The biggest pending work is:

- Connect pages with real backend APIs.
- Create proper MongoDB database schemas.
- Replace sample data with real data.
- Add full CRUD operations.
- Add backend role permission checks.
- Improve UI design and charts.
- Test and deploy the full project.
