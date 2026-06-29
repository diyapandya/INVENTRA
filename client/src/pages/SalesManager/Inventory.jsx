import React from "react";
import SectionPage from "./SectionPage";

function Inventory() {
  return (
    <SectionPage
      title="Inventory"
      description="Read-only inventory visibility for sellable stock and customer commitments."
      columns={["SKU", "Product", "Available", "Reserved", "Status"]}
      rows={[
        ["SKU-2048", "USB-C Dock", "186", "24", "Available"],
        ["SKU-2045", "Barcode Scanner", "43", "18", "Low Stock"],
        ["SKU-2038", "Packing Tape", "0", "0", "Out Of Stock"],
        ["SKU-2028", "Laptop Stand", "118", "12", "Available"],
      ]}
    />
  );
}

export default Inventory;
