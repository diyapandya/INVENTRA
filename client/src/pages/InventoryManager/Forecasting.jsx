import React from "react";
import SectionPage from "./SectionPage";

function Forecasting() {
  return (
    <SectionPage
      title="Forecasting"
      description="View demand and replenishment forecasts for inventory planning."
      columns={["Forecast", "Category", "Next Period", "Confidence"]}
      rows={[
        ["Demand Growth", "Electronics", "+12%", "High"],
        ["Stock Risk", "Packaging", "Medium", "High"],
        ["Reorder Need", "Hardware", "Next 7 Days", "Medium"],
        ["Supplier Lead Time", "Furniture", "8 Days", "Medium"],
      ]}
    />
  );
}

export default Forecasting;
