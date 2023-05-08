import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthContextProvider } from "./contexts/AuthContext";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import Public from "./components/util/Public";
import Protected from "./components/util/Protected";

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
            path="dashboard"
            element={
              <Protected>
                <DashboardPage />
              </Protected>
            }
          />
        </Routes>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
