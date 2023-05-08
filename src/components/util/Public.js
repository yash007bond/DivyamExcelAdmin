import { Navigate } from "react-router-dom";

import { UserAuth } from "../../contexts/AuthContext";

const Public = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};

export default Public;
