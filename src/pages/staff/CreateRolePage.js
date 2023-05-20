import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Input,
  Text,
  Box,
  Checkbox,
  Stack,
} from "@chakra-ui/react";

import rolesServices from "../../services/roles.services";
import { GlobalStyles } from "../../constants/styles";
import { createSlug } from "../../components/helpers/createSlug";

const CreateRolePage = () => {
  const [roleName, setRoleName] = useState("");
  const [roleNameTouched, setRoleNameTouched] = useState(false);
  const [roleNameIsValid, setRoleNameIsValid] = useState(false);
  const [showRoleNameError, setShowRoleNameError] = useState(false);
  const [roleNameError, setRoleNameError] = useState("");
  const [roleNameSlug, setRoleNameSlug] = useState("");
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const [formIsValid, setFormIsValid] = useState(false);
  const [showCreateRoleError, setShowCreateRoleError] = useState(false);
  const [createRoleErrorText, setCreateRoleErrorText] = useState("");

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  useEffect(() => {
    if (roleName !== "") {
      (async () => {
        try {
          const slug = createSlug(roleName);

          const roleDoc = await rolesServices.getRole(slug);
          if (roleDoc.exists()) {
            setRoleNameIsValid(false);
            setRoleNameError("Role already exists");
          } else {
            setRoleNameSlug(slug);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setRoleNameIsValid(false);
      setRoleNameError("Role name cannot be empty");
    }
  }, [roleName]);

  useEffect(() => {
    if (roleNameTouched && !roleNameIsValid) {
      setShowRoleNameError(true);
    }
  }, [roleNameTouched, roleNameIsValid]);

  const handleRoleNameChange = (event) => {
    setRoleName(event.target.value.trim());
  };

  const handleRoleNameBlur = () => {
    setRoleNameTouched(true);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    setRoleNameTouched(true);
  };

  return (
    <Box color={GlobalStyles.colors.textGray}>
      <form onSubmit={handleOnSubmit}>
        <Flex mt="32px">
          <Text fontSize="20" w="20%" mt="8px">
            Role Name
          </Text>
          <Box w="100%">
            <Input
              size="lg"
              variant="filled"
              fontSize="22px"
              onChange={handleRoleNameChange}
              onBlur={handleRoleNameBlur}
              isInvalid={showRoleNameError}
              errorBorderColor="red.400"
            />
            {showRoleNameError && (
              <Text fontSize="18px" color="red.500">
                {roleNameError}
              </Text>
            )}
          </Box>
        </Flex>
        <Flex mt="32px">
          <Text fontSize="20" w="20%" mt="8px">
            Permissions
          </Text>
          <Box w="100%">
            <Text fontSize="24">Additional Permissions</Text>
            <Checkbox
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) =>
                setCheckedItems([e.target.checked, e.target.checked])
              }
            >
              Parent Checkbox
            </Checkbox>
            <Stack pl={6} mt={1} spacing={1}>
              <Checkbox
                isChecked={checkedItems[0]}
                onChange={(e) =>
                  setCheckedItems([e.target.checked, checkedItems[1]])
                }
              >
                Child Checkbox 1
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) =>
                  setCheckedItems([checkedItems[0], e.target.checked])
                }
              >
                Child Checkbox 2
              </Checkbox>
            </Stack>
          </Box>
        </Flex>
        <Button
          type="submit"
          bgColor={GlobalStyles.colors.purple800}
          _hover={{ bg: GlobalStyles.colors.purple800 }}
          color="white"
          p="24px"
          mt="32px"
        >
          CREATE ROLE
        </Button>
      </form>
    </Box>
  );
};

export default CreateRolePage;
