import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/HomePage";
import { Register } from "../pages/RegisterPage";
import { Dashboard } from "../pages/DashboardPage";
import { ErrorPage } from "../pages/ErrorPage";

export const Router = () => {
  return ( 
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>

 );
};