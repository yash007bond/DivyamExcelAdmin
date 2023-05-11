import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RoleManagementPage = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("../createRole")}>Create Role</Button>;
};

export default RoleManagementPage;
