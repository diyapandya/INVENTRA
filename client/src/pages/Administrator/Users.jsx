import React from "react";
import SectionPage from "./SectionPage";

function Users() {
  return (
    <SectionPage
      title="Users"
      description="Manage platform users, account status, and assigned departments."
      columns={["Name", "Email", "Role", "Status"]}
      rows={[
        ["Diya Sharma", "admin@inventra.com", "Administrator", "Active"],
        ["Karan Mehta", "inventory@inventra.com", "Inventory Manager", "Active"],
        ["Riya Patel", "sales@inventra.com", "Sales Manager", "Active"],
        ["Aman Verma", "support@inventra.com", "Support", "Inactive"],
      ]}
    />
  );
}

export default Users;
