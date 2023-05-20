import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import MainNavbar from "./MainNavbar";
import { GlobalStyles } from "../../constants/styles";
import MainHeader from "./MainHeader";

const RootLayout = () => {
  const mainNavStyles = {
    bg: GlobalStyles.colors.purple800,
    h: "100%",
    borderRadius: "20px",
    p: "30px",
    a: {
      color: "white",
      width: "100%",
      py: "5px",
    },
    "a.active": {
      color: GlobalStyles.colors.orange800,
    },
    ".main a": {
      fontSize: "22px",
    },
    ".sub a": {
      fontSize: "20px",
    },
    ".navGroup__content": {
      maxHeight: 0,
      overflow: "hidden",
      transition: "max-height 0.5s ease-out",
    },
    ".navGroup__content.expanded": {
      maxHeight: "500px" /* Set a maximum height for the expanded content */,
      overflow: "hidden",
      transition: "max-height 0.5s ease-in",
    },
    overflow: "auto",
    "::-webkit-scrollbar": {
      display: "none",
    },
  };

  const bodyStyles = {
    bg: GlobalStyles.colors.gray50,
  };

  const contentStyles = {
    mt: "32px",
    bg: "white",
    py: "32px",
    px: "5%",
  };

  return (
    <Box w="100%" px="30px" sx={bodyStyles}>
      <Grid templateColumns="repeat(9, 1fr)">
        <GridItem colSpan="2" height="100vh" pt="30px" pr="30px" pb="30px">
          <Box sx={mainNavStyles}>
            <Heading as="h1" color="white" textAlign="center" pb="32px">
              Divyam
            </Heading>
            <MainNavbar />
          </Box>
        </GridItem>
        <GridItem colSpan="7">
          <MainHeader />
          <Box sx={contentStyles}>
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RootLayout;
