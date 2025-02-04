import { useContext } from "react";
import { AuthContext } from "../provider/AuthContexProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinar from "../components/Spinar";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinar></Spinar>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
