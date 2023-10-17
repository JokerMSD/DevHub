import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/HomePage";
import { Register } from "../pages/RegisterPage";
import { Dashboard } from "../pages/DashboardPage";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";

export const Router = () => {
  const [user, setUser] = useState([])
  return ( 
    <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>

 );
};