import React from "react";
import SectionPage from "./SectionPage";

function Customers() {
  return (
    <SectionPage
      title="Customers"
      description="Review customer records, order counts, and revenue contribution."
      columns={["Customer", "Email", "Orders", "Revenue"]}
      rows={[
        ["ABC Store", "admin@abc.com", "28", "$7,500"],
        ["Global Traders", "sales@global.com", "38", "$10,200"],
        ["Retail Hub", "ops@retailhub.com", "24", "$6,450"],
        ["Quick Retail", "contact@quick.com", "32", "$8,900"],
      ]}
    />
  );
}

export default Customers;
