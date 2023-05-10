import { Button } from "@chakra-ui/react";

import { UserAuth } from "../contexts/AuthContext";

const DashboardPage = () => {
  const { user } = UserAuth();

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
