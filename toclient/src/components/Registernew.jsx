
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Login.css"
const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
 
  
  const [gender, setGender] = useState("");
  const [age, setage] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [profAvatar, setProfAvatar] = useState("");
  const [profAvatarPreview, setProfAvatarPreview] = useState("");
  const navigateTo = useNavigate();

  const handleprofAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfAvatarPreview(reader.result);
      setProfAvatar(file);
    };
  };
  const handleRegistration = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!firstName) {
      errors.firstName = "*First name is required";
    }
    if (!lastName) {
      errors.lastName = "*Last name is required";
    }
    if (!email) {
      errors.email = "*Email is required";
    }
    if (!phone) {
      errors.phone = "*Mobile no  is required";
    }
    if (!age) {
      errors.age = "*Age  is required";
    }
    if (!cpassword) {
      errors.cpassword = "*Confrim Password is required";
    }




    if (!gender) {
      errors.gender = "*Gender is required";
    }
    if (!password) {
      errors.password = "*Password is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);

    }
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("gender", gender);
      formData.append("age", age);
      formData.append("password", password);
      formData.append("cpassword", cpassword);



      formData.append("profAvatar", profAvatar);
      await axios
        .post(
          "http://localhost:4000/api/v1/user/patient/register",  formData,
       
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");


          setGender("");
          setPassword("");
        });
    } catch (error) {
      //alert(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <section>
      
      <div className="container form-component register-form">
        <h3 className="dt-title rv">
          <span>Sign up</span>
        </h3>
        <p className="signp">Please Register To Continue</p>
        <p className="info-card-descriptions signd">
          Welcome to HealthCare Plus, India's most trusted healthcare partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>
        <form onSubmit={handleRegistration}>
          <div> 
             <div>
            <img
              src={
                profAvatarPreview ? `${profAvatarPreview}` : "/profHolder.jpg"
              }
              style={{ height: "200px", width: "200px", border: " border: 2px solid rgba(71, 72, 72, 0.4)", borderRadius: "20px", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.25)" }}
              alt="Your Profile Picture"
            />
            <input type="file" onChange={handleprofAvatar}
             />
          </div>
          </div>
            <div>
              <label>

                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {formErrors.firstName && <p className="error-message">{formErrors.firstName}</p>}
              </label>
              <br />
              <label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {formErrors.lastName && <p className="error-message">{formErrors.lastName}</p>}
              </label>
              <br />
            </div>
            <div>
              <label>

                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
              </label>
              <br></br>
              <label>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
              </label>
              <br></br>
            </div>

            <div>
              <label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {formErrors.gender && <p className="error-message">{formErrors.gender}</p>}
              </label>
              <br></br>
              <label>
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                />
                {formErrors.age && <p className="error-message">{formErrors.age}</p>}
              </label>
              <br></br>
              </div><div>
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {formErrors.password && <p className="error-message">{formErrors.password}</p>}
              </label>
              <br></br>
              <label>
                <input
                  type="password"
                  placeholder=" Confirm Password"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
                {formErrors.cpassword && <p className="error-message">{formErrors.cpassword}</p>}
              </label>
              <br></br>
            </div>
            <div
              style={{
                gap: "10px",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <p style={{ marginBottom: 0, alignItems: "center", fontSize: "21px" }}>Already Registered?</p>
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "#271776ca", fontWeight: "600", alignItems: "center", fontSize: "21px" }}
              >
                Login Now
              </Link>
            </div>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <button type="submit">Register</button>
            </div>
        </form>
      </div>
      </section>
  );
};

export default Register;