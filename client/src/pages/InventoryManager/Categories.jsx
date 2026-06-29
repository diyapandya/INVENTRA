import React from "react";
import SectionPage from "./SectionPage";

function Categories() {
  return (
    <SectionPage
      title="Categories"
      description="Review product categories and stock coverage by department."
      columns={["Category", "Products", "Stock Value", "Low Stock"]}
      rows={[
        ["Electronics", "420", "$128,400", "12"],
        ["Furniture", "185", "$72,900", "5"],
        ["Supplies", "356", "$31,200", "8"],
        ["Hardware", "287", "$52,100", "7"],
      ]}
    />
  );
}

export default Categories;
