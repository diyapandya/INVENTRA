import React from "react";
import SectionPage from "./SectionPage";

function Warehouses() {
  return (
    <SectionPage
      title="Warehouses"
      description="View warehouse capacity, utilization, and operating status."
      columns={["Warehouse", "Location", "Utilization", "Status"]}
      rows={[
        ["Central DC", "Mumbai", "82%", "Active"],
        ["North Hub", "Delhi", "68%", "Active"],
        ["South Hub", "Bengaluru", "74%", "Active"],
        ["West Hub", "Pune", "59%", "Maintenance"],
      ]}
    />
  );
}

export default Warehouses;
