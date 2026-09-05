import { Navigate } from "react-router-dom";
import {
  isAuthenticated,
  hasRole
} from "../Auth/auth";

function ProtectedRoute({
  children,
  roles
}) {

  if (!isAuthenticated()) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }


  if (
    roles &&
    roles.length > 0 &&
    !roles.some(role => hasRole(role))
  ) {

    return (
      <Navigate
        to="/unauthorized"
        replace
      />
    );
  }


  return children;
}

export default ProtectedRoute;