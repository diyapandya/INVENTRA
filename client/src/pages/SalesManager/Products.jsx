import React from "react";
import SectionPage from "./SectionPage";

function Products() {
  return (
    <SectionPage
      title="Products"
      description="Read-only product catalog for quoting, order entry, and customer discussions."
      columns={["SKU", "Product", "Category", "Price", "Status"]}
      rows={[
        ["SKU-2048", "USB-C Dock", "Electronics", "$89", "Available"],
        ["SKU-2047", "Office Chair", "Furniture", "$240", "Available"],
        ["SKU-2046", "Thermal Labels", "Supplies", "$18", "Available"],
        ["SKU-2045", "Barcode Scanner", "Hardware", "$149", "Low Stock"],
      ]}
    />
  );
}

export default Products;
