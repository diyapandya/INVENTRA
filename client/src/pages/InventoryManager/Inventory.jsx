import React from "react";
import SectionPage from "./SectionPage";

function Inventory() {
  return (
    <SectionPage
      title="Inventory"
      description="Monitor warehouse quantity, reorder thresholds, and stock status."
      columns={["SKU", "Product", "Available", "Threshold", "Status"]}
      rows={[
        ["SKU-1048", "USB-C Docking Station", "186", "40", "Healthy"],
        ["SKU-1045", "Barcode Scanner", "43", "50", "Low Stock"],
        ["SKU-1038", "Packing Tape", "0", "100", "Out Of Stock"],
        ["SKU-1028", "Laptop Stand", "118", "30", "Healthy"],
      ]}
    />
  );
}

export default Inventory;
