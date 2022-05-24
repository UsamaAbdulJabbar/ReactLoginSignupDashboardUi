import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "../components/dashboard";
import Home from "../components/home";
import Login from "../components/login";
import Signup from "../components/signup";
import DashboardPart from '../components/dashboard'
export default function Routers() {
    return (
        <>
        
        
        <Router>
           <Routes>
               <Route path="/login" element={<Login />} />
               <Route  path="/signup" element={<Signup/>}/>
               <Route path="/dashboard" element={<Dashboard/>} />
               
           </Routes>
           <Routes>
           
           </Routes>

        </Router>
        
        </>
    );
}

