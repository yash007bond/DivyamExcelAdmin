import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdHome, MdManageAccounts, MdLocationPin } from "react-icons/md";

import MainNavItem from "./MainNavItem";
import MainNavGroup from "./MainNavGroup";

const MainNavbar = () => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const expandItem = (itemId) => {
    if (itemId === expandedItemId) {
      setExpandedItemId(null);
    } else {
      setExpandedItemId(itemId);
    }
  };

  let { pathname } = useLocation();

  return (
    <nav>
      <MainNavItem
        icon={MdHome}
        routeName="dashboard"
        itemLabel="Dashboard"
        isActive={pathname === "/admin/dashboard"}
      />
      <MainNavGroup
        id="staff"
        icon={MdManageAccounts}
        label="Staff"
        isActive={
          pathname === "/admin/userManagement" ||
          pathname === "/admin/roleManagement" ||
          pathname === "/admin/createRole"
        }
        expandItem={expandItem}
        isExpanded={expandedItemId === "staff"}
      >
        <MainNavItem
          routeName="userManagement"
          itemLabel="User Management"
          type="sub"
        />
        <MainNavItem
          routeName="roleManagement"
          itemLabel="Role Management"
          type="sub"
        />
      </MainNavGroup>
      <MainNavGroup
        id="locations"
        icon={MdLocationPin}
        label="Locations"
        isActive={
          pathname === "/admin/states" ||
          pathname === "/admin/metrocities" ||
          pathname === "/admin/areas" ||
          pathname === "/admin/districts" ||
          pathname === "/admin/talukas"
        }
        expandItem={expandItem}
        isExpanded={expandedItemId === "locations"}
      >
        <MainNavItem routeName="states" itemLabel="States" type="sub" />
        <MainNavItem
          routeName="metrocities"
          itemLabel="Metrocities"
          type="sub"
        />
        <MainNavItem routeName="areas" itemLabel="Areas" type="sub" />
        <MainNavItem routeName="districts" itemLabel="Districts" type="sub" />
        <MainNavItem routeName="talukas" itemLabel="Talukas" type="sub" />
      </MainNavGroup>
    </nav>
  );
};

export default MainNavbar;
