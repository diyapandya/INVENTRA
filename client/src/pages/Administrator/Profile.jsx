import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import SectionPage from "./SectionPage";

function Profile() {
  const { user } = useAuth();

  return (
    <SectionPage
      title="Profile"
      description="Administrator account and system access summary."
      columns={["Field", "Value"]}
      rows={[
        ["Name", user?.name || "Administrator"],
        ["Email", user?.email || "admin@inventra.com"],
        ["Role", user?.role || "Administrator"],
        ["Department", "Platform Operations"],
        ["Access", "Full System"],
      ]}
    />
  );
}

export default Profile;
