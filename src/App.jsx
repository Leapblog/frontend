import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SideNavbar from "./components/SideNavbar";
import Profile from "./components/Profile";
import Batch from "./components/Batch/Batch";
import BatchDetails from "./components/Batch/BatchDetails";

const App = () => {
  return (
    <Router>
      <SideNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/batch" element={<Batch />} />
        <Route path="/batch/:id" element={<BatchDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
