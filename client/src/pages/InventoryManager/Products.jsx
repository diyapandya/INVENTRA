import React from "react";
import SectionPage from "./SectionPage";

function Products() {
  return (
    <SectionPage
      title="Products"
      description="Manage product records, SKUs, categories, and current stock availability."
      columns={["SKU", "Product", "Category", "Brand", "Stock"]}
      rows={[
        ["SKU-1048", "USB-C Docking Station", "Electronics", "NorthTech", "186"],
        ["SKU-1047", "Office Chair", "Furniture", "UrbanWorks", "72"],
        ["SKU-1046", "Thermal Labels", "Supplies", "PackRight", "940"],
        ["SKU-1045", "Barcode Scanner", "Hardware", "ScanPro", "43"],
      ]}
    />
  );
}

export default Products;
