import React from "react";
import SectionPage from "./SectionPage";

function Reports() {
  return (
    <SectionPage
      title="Reports"
      description="Access inventory, supplier, stock movement, and purchase order reports."
      columns={["Report", "Owner", "Frequency", "Last Updated"]}
      rows={[
        ["Inventory Valuation", "Inventory Manager", "Daily", "2026-06-29"],
        ["Low Stock Analysis", "Inventory Manager", "Daily", "2026-06-29"],
        ["Supplier Performance", "Procurement", "Weekly", "2026-06-28"],
        ["Purchase Order Aging", "Procurement", "Weekly", "2026-06-28"],
      ]}
    />
  );
}

export default Reports;
