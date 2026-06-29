import React from "react";
import SectionPage from "./SectionPage";

function Roles() {
  return (
    <SectionPage
      title="Roles"
      description="Control access levels for system modules and operational workflows."
      columns={["Role", "Users", "Access", "Status"]}
      rows={[
        ["Administrator", "3", "Full System", "Active"],
        ["Inventory Manager", "8", "Inventory, Suppliers, Reports", "Active"],
        ["Sales Manager", "6", "Sales, Customers, Invoices", "Active"],
        ["Support", "4", "Read Only", "Review"],
      ]}
    />
  );
}

export default Roles;
