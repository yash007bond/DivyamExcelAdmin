import { NavLink as RouterNavLink } from "react-router-dom";
import { Box, HStack, Icon } from "@chakra-ui/react";

import { GlobalStyles } from "../../constants/styles";

const MainNavItem = ({
  icon = null,
  routeName,
  itemLabel,
  isActive = false,
  type = "main",
}) => {
  return (
    <Box width="100%" h={type === "main" ? "50px" : "40px"} className={type}>
      <HStack>
        <Box w="32px">
          {icon && (
            <Icon
              as={icon}
              color={isActive ? GlobalStyles.colors.orange800 : "white"}
              w="24px"
              h="24px"
            />
          )}
        </Box>
        <RouterNavLink to={routeName}>{itemLabel}</RouterNavLink>
      </HStack>
    </Box>
  );
};

export default MainNavItem;
