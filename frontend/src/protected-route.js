import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem("adminToken"); // Adjust according to your localStorage key

  return isAdminLoggedIn ? children : <Navigate to="/login-plantify-admin" replace />;
};

export default ProtectedRoute;
