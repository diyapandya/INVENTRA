import React from "react";
import SectionPage from "./SectionPage";

function Invoices() {
  return (
    <SectionPage
      title="Invoices"
      description="Monitor invoice status, billing values, and payment progress."
      columns={["Invoice", "Customer", "Amount", "Status"]}
      rows={[
        ["INV-501", "ABC Store", "$1,240", "Paid"],
        ["INV-500", "Global Traders", "$860", "Pending"],
        ["INV-499", "Retail Hub", "$2,180", "Sent"],
        ["INV-498", "Quick Retail", "$640", "Paid"],
      ]}
    />
  );
}

export default Invoices;
