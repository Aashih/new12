import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { Context } from "./main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://prateekbackend.onrender.com/api/v1/user/patient/me", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };

    fetchUser();
  }, []); // Removed `isAuthenticated` to prevent infinite re-renders

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
      <Footer />
    </Router>
  );
};

export default App;
