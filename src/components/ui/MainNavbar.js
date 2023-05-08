import { NavLink as RouterNavLink, Outlet } from "react-router-dom";

const MainNavbar = () => {
  return (
    <>
      <nav>
        <RouterNavLink to="dashboard">Dashboard</RouterNavLink>
        <RouterNavLink to="staff">Staff</RouterNavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default MainNavbar;
