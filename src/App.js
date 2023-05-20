import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthContextProvider } from "./contexts/AuthContext";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import Public from "./components/util/Public";
import Protected from "./components/util/Protected";
import NoMatch from "./pages/NoMatch";
import RootLayout from "./components/ui/RootLayout";
import UserManagementPage from "./pages/staff/UserManagementPage";
import RoleManagementPage from "./pages/staff/RoleManagementPage";
import CreateRolePage from "./pages/staff/CreateRolePage";
import StatesPage from "./pages/location/StatesPage";
import DistrictsPage from "./pages/location/DistrictsPage";
import MetrocitiesPage from "./pages/location/MetrocitiesPage";
import AreasPage from "./pages/location/AreasPage";
import TalukasPage from "./pages/location/TalukasPage";

function App() {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Public>
                <SignInPage />
              </Public>
            }
          />
          <Route
            path="admin"
            element={
              <Protected>
                <RootLayout />
              </Protected>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="userManagement" element={<UserManagementPage />} />
            <Route path="roleManagement" element={<RoleManagementPage />} />
            <Route path="createRole" element={<CreateRolePage />} />
            <Route path="states" element={<StatesPage />} />
            <Route path="metrocities" element={<MetrocitiesPage />} />
            <Route path="areas" element={<AreasPage />} />
            <Route path="districts" element={<DistrictsPage />} />
            <Route path="talukas" element={<TalukasPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
