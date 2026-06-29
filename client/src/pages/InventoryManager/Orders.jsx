import React from "react";
import SectionPage from "./SectionPage";

function Orders() {
  return (
    <SectionPage
      title="Orders"
      description="Read-only order visibility for inventory planning and fulfillment coordination."
      columns={["Order", "Customer", "Items", "Amount", "Status"]}
      rows={[
        ["ORD-881", "ABC Store", "12", "$1,240", "Completed"],
        ["ORD-880", "Global Traders", "8", "$860", "Pending"],
        ["ORD-879", "Retail Hub", "18", "$2,180", "Processing"],
        ["ORD-878", "Quick Retail", "6", "$640", "Completed"],
      ]}
    />
  );
}

export default Orders;
