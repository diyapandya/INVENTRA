import React from "react";
import SectionPage from "./SectionPage";

function Forecasting() {
  return (
    <SectionPage
      title="Forecasting"
      description="Review demand forecasts and planning signals for platform operations."
      columns={["Forecast", "Category", "Next Period", "Confidence"]}
      rows={[
        ["Demand Growth", "Electronics", "+12%", "High"],
        ["Stock Risk", "Packaging", "Medium", "High"],
        ["Revenue Projection", "All Categories", "$452,000", "Medium"],
        ["Supplier Lead Time", "Furniture", "8 Days", "Medium"],
      ]}
    />
  );
}

export default Forecasting;
