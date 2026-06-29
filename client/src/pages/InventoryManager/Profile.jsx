import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import SectionPage from "./SectionPage";

function Profile() {
  const { user } = useAuth();

  return (
    <SectionPage
      title="Profile"
      description="Inventory Manager account and operating responsibility summary."
      columns={["Field", "Value"]}
      rows={[
        ["Name", user?.name || "Inventory Manager"],
        ["Email", user?.email || "inventory@inventra.com"],
        ["Role", user?.role || "Inventory Manager"],
        ["Department", "Inventory Operations"],
        ["Access", "Products, Stock, Suppliers, Purchase Orders, Reports"],
      ]}
    />
  );
}

export default Profile;
