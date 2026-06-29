import React from "react";
import SectionPage from "./SectionPage";

function Products() {
  return (
    <SectionPage
      title="Products"
      description="Administer product records, categories, brands, and availability."
      columns={["SKU", "Product", "Category", "Brand", "Stock"]}
      rows={[
        ["SKU-2048", "USB-C Dock", "Electronics", "NorthTech", "186"],
        ["SKU-2047", "Office Chair", "Furniture", "UrbanWorks", "72"],
        ["SKU-2046", "Thermal Labels", "Supplies", "PackRight", "940"],
        ["SKU-2045", "Barcode Scanner", "Hardware", "ScanPro", "43"],
      ]}
    />
  );
}

export default Products;
