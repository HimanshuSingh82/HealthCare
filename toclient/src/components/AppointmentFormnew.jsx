import axios from "axios";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import "../Styles/AppointmentForm.css";
import "../Styles/Login.css";
const AppointmentFormnew = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mode, setMode] = useState("");

  const [appointmentDate, setAppointmentDate] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const navigateTo = useNavigate();
  const [hasVisited, setHasVisited] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const departmentsArray = [
    "Select Department",
    "Dentist",
    "Cardiology",
    "Orthopedic",

    "Neurology",
    "Urology",


    "Dermatology"

  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
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
    if (!mode) {
      errors.mode = "*Preferred mode  is required";
    }
    if (!appointmentDate) {
      errors.appointmentDate = "*Appointment date is required";
    } else {
      const selectedYear = new Date(appointmentDate).getFullYear();
      const selectedTime = new Date(appointmentDate);
      const currentTime = new Date();
      if (selectedYear > 2024) {
        errors.appointmentDate = "Please try to  book an appointment in this year only"
      }
      else {
        if (selectedTime <= currentTime) {
          errors.appointmentDate = "*Please select a future appointment Date";
        }
      }

    }
    if (!gender) {
      errors.gender = "*Gender is required";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "*Appointment time is required";
    }
    if (department != "Dentist" &&
      department != "Cardiology" &&
      department != "Orthopedic" &&

      department != "Neurology" &&
      department != "Urology" &&


      department != "Dermatology") {
      errors.depart = "*Doctor's Department is required";
    }
    if (!doctorFirstName || !doctorLastName) {
      errors.docname = "*Doctor's name is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);

    }
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          mode,
          appointment_date: appointmentDate,
          gender,
          appointment_time: appointmentTime,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,

        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setMode(""),
        setAppointmentDate(""),

        setGender(""),
        setAppointmentTime(""),
        setDepartment(""),
        setDoctorFirstName(""),
        setDoctorLastName(""),
        setHasVisited("")

navigateTo("/notification");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  
  return (
    <section>
    <ToastContainer position="top-center"></ToastContainer>
      <div className="appointment-form-section">
        <h1 className="legal-siteTitle">

          HealthCare<span className="legal-siteSign">+</span>

        </h1>




        <div className="form-container">
          <h2 className="form-title">
            <span>Book Appointment Online</span>
          </h2>
        </div>
      </div>
      <div className="container form-component appointment-form">
        <form onSubmit={handleAppointment}>
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
              <select value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="">Preferred Mode:</option>
                <option value="Voice Call">Voice Call</option>
                <option value="Video Call">Video Call</option>
                <option value="Visit Clinic">Visit Clinic</option>
              </select>
              {formErrors.mode && <p className="error-message">{formErrors.mode}</p>}
            </label>
            <br></br>
            <label>
              <input
                type="date"
                placeholder="Appointment Date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
              />

              {formErrors.appointmentDate && <p className="error-message">{formErrors.appointmentDate}</p>}
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
                type="time"
                placeholder="Appointment Time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
              />
              {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
            </label>
            <br></br>
          </div>
          <div>
            <label>
              <select

                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDoctorFirstName("");
                  setDoctorLastName("");
                }}
              >

                {departmentsArray.map((depart, index) => {
                  return (
                    <option value={depart} key={index}>
                      {depart}
                    </option>
                  );
                })}

              </select>
              {formErrors.depart && <p className="error-message">{formErrors.depart}</p>}
            </label>
            <br></br>
            <label>
              <select
                value={`${doctorFirstName} ${doctorLastName}`}
                onChange={(e) => {
                  const [firstName, lastName] = e.target.value.split(" ");
                  setDoctorFirstName(firstName);
                  setDoctorLastName(lastName);
                }}
                disabled={!department}
              >
                <option value="">Select Doctor</option>
                {doctors
                  .filter((doctor) => doctor.doctorDepartment === department)
                  .map((doctor, index) => (
                    <option
                      value={`${doctor.firstName} ${doctor.lastName}`}
                      key={index}
                    >
                      {doctor.firstName} {doctor.lastName}
                    </option>
                  ))}
              </select>
              {formErrors.docname && <p className="error-message">{formErrors.docname}</p>}
            </label>
            <br></br>
          </div>

          <div
            style={{
              gap: "10px",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0, alignItems: "center", fontSize: "25px" }}>Have you booked any appointment before this?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "26px", height: "26px" }}
            />
          </div>
          <button type="submit" style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentFormnew;