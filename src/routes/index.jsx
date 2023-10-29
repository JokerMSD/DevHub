import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/LoginPage";
import { Register } from "../pages/RegisterPage";
import { Dashboard } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutesUser } from "./PrivateRoutes/PrivateRoutesUser";
import { PublicRoutes } from "./PublicRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoutesUser />}>
        <Route path="/user" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
