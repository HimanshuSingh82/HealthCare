import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const  Navbar=()=> {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };


  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };
  const goToProfile = () => {
    navigateTo("/profile");
  };
 

  const goToRegister = () => {
    navigateTo("/register");
  };
  return (
    <header>
      <div className="navbar-section">
        <h1 className="navbar-title">
          <Link to="/">
            HealthCare<span className="navbar-sign">+</span>
            
          </Link>
        </h1>

        {/* Desktop */}
        <ul className="navbar-items">
          <li>
            <Link to="/" className="navbar-links">
              Home
            </Link>
     a     </li>

          <li>
            <Link to ="/About" className="navbar-links">
              About
            </Link>
          </li>
          <li>
            <Link to="/Doctors" className="navbar-links">
              Doctors
            </Link>
          </li>
          <li>
            <Link to="/Location" className="navbar-links">
              Location
            </Link>
          </li>
       
          <li>
          <Link to="/MessageForm" className="navbar-links">
              Message
            </Link>
          </li>
          </ul>
          <div className="logreg">
            {isAuthenticated ? (

          
              <button className="navbar-links btn" onClick={goToProfile}>
             Profile
            </button>
 
          ) : (
         
            <button className="navbar-links btn" onClick={goToRegister} >
            REGISTER
            </button>
            
          )}
          {isAuthenticated ? (
            <button className="navbar-links btn" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button className="navbar-links btn" onClick={goToLogin}>
              LOGIN
            </button>
            
          )}
          </div>

        <button
          className="navbar-btn"
          type="button"
          disabled={isButtonDisabled}
          onClick={handleChatBtnClick}
        >
          <FontAwesomeIcon icon={faCommentDots} /> Live Chat
        </button>

        {/* Mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar-close">
            <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
          </div>

          <ul className="mobile-navbar-links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/About">
                About
              </Link>
            </li>
           
            
            <li>
              <Link onClick={openNav} to="/Doctors">
                Doctors
              </Link>
            </li>
              
            
           
            <li>
              <Link onClick={openNav} to="/Location">
                Location
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/MessageForm">
                Message
              </Link>
            </li>
            
         
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="mobile-nav">
          <FontAwesomeIcon
            icon={faBars}
            onClick={openNav}
            className="hamb-icon"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
