import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

// import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

import { useAuth } from "./context/AuthProvider";
import MainHeader from "./pages/MainHeader";

const App = () => {
  
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
    
  return (
    <div className="pb-6">
      <Navbar  />
      <Routes>
        <Route path="/" element={<MainHeader />} />
        
        {/*  Default Route */}
        <Route index element={<Home />}/>
        
        <Route path="/Library" element={ authUser ? <Library /> : <Navigate to="/login"/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App