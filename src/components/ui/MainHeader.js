import { Flex, HStack, Spacer, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../contexts/AuthContext";

const MainHeader = () => {
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
    <Flex pt="30px">
      <Heading as="h1">Divyam</Heading>

      <Spacer />

      <HStack spacing="10px">
        <Text>{user.email}</Text>
        <Button onClick={handleLogOut}>Logout</Button>
      </HStack>
    </Flex>
  );
};

export default MainHeader;
