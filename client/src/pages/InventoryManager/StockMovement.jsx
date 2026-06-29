import React from "react";
import SectionPage from "./SectionPage";

function StockMovement() {
  return (
    <SectionPage
      title="Stock Movement"
      description="Track stock receiving, dispatch, adjustments, and warehouse activity."
      columns={["Movement ID", "Product", "Quantity", "Type", "Date"]}
      rows={[
        ["MOV-901", "Mechanical Keyboard", "+80", "Receiving", "2026-06-29"],
        ["MOV-900", "Laptop Stand", "-26", "Dispatch", "2026-06-29"],
        ["MOV-899", "Packing Tape", "+300", "Receiving", "2026-06-28"],
        ["MOV-898", "Barcode Scanner", "-12", "Dispatch", "2026-06-28"],
      ]}
    />
  );
}

export default StockMovement;
