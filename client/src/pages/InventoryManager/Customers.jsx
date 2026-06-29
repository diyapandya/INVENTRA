import React from "react";
import SectionPage from "./SectionPage";

function Customers() {
  return (
    <SectionPage
      title="Customers"
      description="Read-only customer demand context for inventory decisions."
      columns={["Customer", "Orders", "Top Category", "Revenue"]}
      rows={[
        ["ABC Store", "28", "Electronics", "$7,500"],
        ["Global Traders", "38", "Supplies", "$10,200"],
        ["Retail Hub", "24", "Furniture", "$6,450"],
        ["Quick Retail", "32", "Hardware", "$8,900"],
      ]}
    />
  );
}

export default Customers;
