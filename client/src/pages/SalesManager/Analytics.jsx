import React from "react";
import SectionPage from "./SectionPage";

function Analytics() {
  return (
    <SectionPage
      title="Analytics"
      description="Limited analytics focused on sales, customers, and revenue performance."
      columns={["Metric", "Current", "Previous", "Trend"]}
      rows={[
        ["Revenue", "$426,900", "$398,200", "Up"],
        ["Orders", "1,326", "1,210", "Up"],
        ["Average Order", "$156", "$149", "Up"],
        ["Pending Invoices", "18", "21", "Down"],
      ]}
    />
  );
}

export default Analytics;
