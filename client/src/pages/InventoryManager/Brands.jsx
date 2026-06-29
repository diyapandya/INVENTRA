import React from "react";
import SectionPage from "./SectionPage";

function Brands() {
  return (
    <SectionPage
      title="Brands"
      description="Track brands, active items, and supplier ownership."
      columns={["Brand", "Products", "Primary Supplier", "Status"]}
      rows={[
        ["NorthTech", "118", "Northwind Supply", "Active"],
        ["UrbanWorks", "64", "Urban Warehouse Co.", "Active"],
        ["PackRight", "92", "PackRight Logistics", "Review"],
        ["ScanPro", "37", "Northwind Supply", "Active"],
      ]}
    />
  );
}

export default Brands;
