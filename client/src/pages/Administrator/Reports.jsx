import React from "react";
import SectionPage from "./SectionPage";

function Reports() {
  return (
    <SectionPage
      title="Reports"
      description="Access system reports for inventory, users, sales, and suppliers."
      columns={["Report", "Module", "Frequency", "Last Updated"]}
      rows={[
        ["System Overview", "Platform", "Daily", "2026-06-29"],
        ["Inventory Valuation", "Inventory", "Daily", "2026-06-29"],
        ["Sales Performance", "Sales", "Weekly", "2026-06-28"],
        ["Supplier Scorecard", "Suppliers", "Monthly", "2026-06-26"],
      ]}
    />
  );
}

export default Reports;
