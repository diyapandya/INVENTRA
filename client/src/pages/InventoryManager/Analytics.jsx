import React from "react";
import SectionPage from "./SectionPage";

function Analytics() {
  return (
    <SectionPage
      title="Analytics"
      description="Limited analytics focused on inventory performance and stock health."
      columns={["Metric", "Current", "Previous", "Trend"]}
      rows={[
        ["Inventory Value", "$284,600", "$276,300", "Up"],
        ["Low Stock Products", "32", "41", "Down"],
        ["Stock Turnover", "4.8x", "4.4x", "Up"],
        ["Supplier Fill Rate", "94%", "92%", "Up"],
      ]}
    />
  );
}

export default Analytics;
