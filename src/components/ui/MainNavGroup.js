import { useState } from "react";
import { Box, HStack, Text, Icon, Spacer } from "@chakra-ui/react";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { GlobalStyles } from "../../constants/styles";

const MainNavGroup = ({
  children,
  icon,
  label,
  isActive = false,
  id,
  expandItem,
  isExpanded,
}) => {
  const handleClick = () => {
    expandItem(id);
  };

  return (
    <Box width="100%" mb="8px" onClick={handleClick} cursor="pointer">
      <HStack>
        <Box w="32px" h="24px" mr="-4px">
          {icon && (
            <Icon
              as={icon}
              color={isActive ? GlobalStyles.colors.orange800 : "white"}
              w="24px"
              h="24px"
            />
          )}
        </Box>
        <Text
          fontSize="22px"
          color={isActive ? GlobalStyles.colors.orange800 : "white"}
        >
          {label}
        </Text>
        <Spacer />
        <Icon
          as={MdOutlineArrowDropDown}
          color={GlobalStyles.colors.whiteTransparent100}
          w="40px"
          h="40px"
        />
      </HStack>
      <Box className={`navGroup__content ${isExpanded ? "expanded" : ""}`}>
        {children}
      </Box>
    </Box>
  );
};

export default MainNavGroup;
