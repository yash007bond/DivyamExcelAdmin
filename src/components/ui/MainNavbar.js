import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdHome, MdManageAccounts } from "react-icons/md";

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
          pathname === "/admin/roleManagement"
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
    </nav>
  );
};

export default MainNavbar;
