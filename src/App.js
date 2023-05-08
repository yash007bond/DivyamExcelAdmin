import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
