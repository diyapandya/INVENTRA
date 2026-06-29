import React from "react";
import SectionPage from "./SectionPage";

function Suppliers() {
  return (
    <SectionPage
      title="Suppliers"
      description="Manage supplier records, categories, and fulfillment performance."
      columns={["Supplier", "Category", "Contact", "Status"]}
      rows={[
        ["Northwind Supply", "Electronics", "orders@northwind.com", "Active"],
        ["Urban Warehouse Co.", "Furniture", "supply@urban.com", "Active"],
        ["PackRight Logistics", "Packaging", "ops@packright.com", "Review"],
        ["Prime Office Goods", "Supplies", "sales@primeoffice.com", "Active"],
      ]}
    />
  );
}

export default Suppliers;
