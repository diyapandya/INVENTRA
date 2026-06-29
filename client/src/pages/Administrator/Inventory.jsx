import React from "react";
import SectionPage from "./SectionPage";

function Inventory() {
  return (
    <SectionPage
      title="Inventory"
      description="Monitor stock quantities, reorder thresholds, and status."
      columns={["SKU", "Product", "Available", "Threshold", "Status"]}
      rows={[
        ["SKU-2048", "USB-C Dock", "186", "40", "Healthy"],
        ["SKU-2045", "Barcode Scanner", "43", "50", "Low Stock"],
        ["SKU-2038", "Packing Tape", "0", "100", "Out Of Stock"],
        ["SKU-2028", "Laptop Stand", "118", "30", "Healthy"],
      ]}
    />
  );
}

export default Inventory;
