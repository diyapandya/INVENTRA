import React from "react";
import SectionPage from "./SectionPage";

function AnalyticsDashboard() {
  return (
    <SectionPage
      title="Analytics Dashboard"
      description="View operational analytics across inventory, sales, suppliers, and users."
      columns={["Metric", "Current", "Previous", "Trend"]}
      rows={[
        ["Revenue", "$426,900", "$398,200", "Up"],
        ["Sales", "8,932", "8,120", "Up"],
        ["Inventory Value", "$284,600", "$276,300", "Up"],
        ["Low Stock", "32", "41", "Down"],
      ]}
    />
  );
}

export default AnalyticsDashboard;
