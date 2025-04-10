
import React, { useContext, useState } from "react";
import { Link, useNavigate, Navigate, Await } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Context } from "../main";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from "axios";

import "../Styles/Login.css"
const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post( 
          "http://localhost:4000/api/v1/user/login",
          { email, password,  role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
        
        });
    } catch (error) {
  //alert(error.response.data.message)
    toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
  <section>
        <ToastContainer position="top-center"></ToastContainer>

      <div className="container form-component login-form">
      <h3 className="dt-title rv">
          <span>Sign In</span>
        </h3>
        <p className="signp">Please Login To Continue</p>
        <p className="info-card-descriptions signd">
        Welcome to HealthCare Plus, India's most trusted healthcare partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{marginBottom: 0,alignItems: "center", fontSize:"21px"  }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{  textDecoration: "none", color: "#271776ca",fontWeight:"600", alignItems: "center", fontSize:"21px"}}
            >
              Register Now
            </Link>
          </div>
          <div  style={{ justifyContent: "center", alignItems: "center"  }} >
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      </section>
  );
};

export default Login;