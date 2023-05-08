import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../contexts/AuthContext";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { logOut } = UserAuth();
  const { user } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={handleLogOut}>Log out</Button>
    </div>
  );
};

export default DashboardPage;
