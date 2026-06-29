import React from "react";
import SectionPage from "./SectionPage";

function Suppliers() {
  return (
    <SectionPage
      title="Suppliers"
      description="Read-only supplier visibility for availability and delivery context."
      columns={["Supplier", "Category", "Lead Time", "Status"]}
      rows={[
        ["Northwind Supply", "Electronics", "5 Days", "Active"],
        ["Urban Warehouse Co.", "Furniture", "8 Days", "Active"],
        ["PackRight Logistics", "Packaging", "3 Days", "Review"],
        ["Prime Office Goods", "Supplies", "4 Days", "Active"],
      ]}
    />
  );
}

export default Suppliers;
