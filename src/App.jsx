import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SideNavbar from "./components/SideNavbar";

const App = () => {
  return (
    <Router>
      <SideNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
