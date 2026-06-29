import React from "react";
import SectionPage from "./SectionPage";

function Orders() {
  return (
    <SectionPage
      title="Orders"
      description="Track customer orders, values, and fulfillment status."
      columns={["Order", "Customer", "Amount", "Status"]}
      rows={[
        ["ORD-881", "ABC Store", "$1,240", "Completed"],
        ["ORD-880", "Global Traders", "$860", "Pending"],
        ["ORD-879", "Retail Hub", "$2,180", "Processing"],
        ["ORD-878", "Quick Retail", "$640", "Completed"],
      ]}
    />
  );
}

export default Orders;
