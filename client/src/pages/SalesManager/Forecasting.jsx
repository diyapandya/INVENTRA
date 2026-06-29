import React from "react";
import SectionPage from "./SectionPage";

function Forecasting() {
  return (
    <SectionPage
      title="Forecasting"
      description="View sales demand forecasts for planning upcoming customer activity."
      columns={["Forecast", "Segment", "Next Period", "Confidence"]}
      rows={[
        ["Revenue Projection", "All Customers", "$452,000", "Medium"],
        ["Demand Growth", "Electronics", "+12%", "High"],
        ["Customer Orders", "Retail", "+8%", "Medium"],
        ["Invoice Risk", "Pending Accounts", "Low", "High"],
      ]}
    />
  );
}

export default Forecasting;
