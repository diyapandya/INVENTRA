import React from "react";
import SectionPage from "./SectionPage";

function Categories() {
  return (
    <SectionPage
      title="Categories"
      description="Review product categories and inventory coverage."
      columns={["Category", "Products", "Stock Value", "Status"]}
      rows={[
        ["Electronics", "420", "$128,400", "Active"],
        ["Furniture", "185", "$72,900", "Active"],
        ["Supplies", "356", "$31,200", "Active"],
        ["Hardware", "287", "$52,100", "Active"],
      ]}
    />
  );
}

export default Categories;
