import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

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
import NotFound from "./pages/NotFound";

const App = () => {
  const { authUser } = useAuth(); // Correct way to destructure from the object
  console.log(authUser);
  
  return (
    <div className="pb-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHeader />} />
        <Route index element={<Home />} />
        <Route path="/library" element={authUser ? <Library /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
