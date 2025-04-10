import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homemy";
import Appointment from "./components/AppointmentFormnew";
import About from "./components/About";
import  Doctors from "./components/Doctors";
import  Location from "./components/Location";
import  MessageForm from "./components/MessageForm";
import Register from "./components/Registernew";
import Footer from "./components/Footer";
import Navbar from "./components/Navbarnew";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import { Context } from "./main";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css';


import "./App.css";
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser} =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (

      <Router>
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/MessageForm" element={<MessageForm/>} />
          <Route path="/Location" element={<Location/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Doctors" element={<Doctors/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        <ToastContainer position="top-center"></ToastContainer>
      </Router> 
    
  );
};

export default App;