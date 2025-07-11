import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (currentUser === undefined) {
    return <div>Loading...</div>; // 👈 fallback DOM chiqishi uchun
  }

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
