import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthContextProvider } from "./contexts/AuthContext";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import Public from "./components/util/Public";
import Protected from "./components/util/Protected";
import MainNavbar from "./components/ui/MainNavbar";
import StaffPage from "./pages/StaffPage";
import NoMatch from "./pages/NoMatch";

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
                <MainNavbar />
              </Protected>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="staff" element={<StaffPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
