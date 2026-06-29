import React from "react";
import SectionPage from "./SectionPage";

function PurchaseOrders() {
  return (
    <SectionPage
      title="Purchase Orders"
      description="Track purchase order status, supplier value, and receiving progress."
      columns={["PO", "Supplier", "Items", "Value", "Status"]}
      rows={[
        ["PO-7781", "Northwind Supply", "16", "$8,420", "Pending"],
        ["PO-7780", "PackRight Logistics", "8", "$2,180", "Approved"],
        ["PO-7779", "Urban Warehouse Co.", "11", "$11,600", "Pending"],
        ["PO-7778", "Prime Office Goods", "22", "$4,950", "Received"],
      ]}
    />
  );
}

export default PurchaseOrders;
