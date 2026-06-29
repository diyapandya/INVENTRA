import React from "react";
import SectionPage from "./SectionPage";

function Settings() {
  return (
    <SectionPage
      title="Settings"
      description="Configure platform operations, notifications, and security defaults."
      columns={["Setting", "Value", "Owner", "Status"]}
      rows={[
        ["Low Stock Alerts", "Enabled", "Administrator", "Active"],
        ["Invoice Reminders", "Enabled", "Administrator", "Active"],
        ["Role Approval", "Required", "Administrator", "Active"],
        ["Audit Logging", "Enabled", "Administrator", "Active"],
      ]}
    />
  );
}

export default Settings;
