import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../providers/UserStateContext";
import { useContext } from "react";

export const PublicRoutes = () => {
  const { user } = useContext(UserContext);

  return user === null || (Array.isArray(user) && user.length === 1) ? (
    <Outlet />
  ) : (
    <Navigate to="/user" />
  );
};
