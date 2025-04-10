import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  // Fetch doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to fetch doctors");
      }
    };
    fetchDoctors();
  }, []);

  // Remove doctor
  const handleRemove = async (doctorId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/user/doctor/${doctorId}`,
        { withCredentials: true }
      );
      toast.success("Doctor removed successfully");
      // Update UI after deletion
      setDoctors((prev) => prev.filter((doc) => doc._id !== doctorId));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to remove doctor");
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => (
            <div className="card" key={element._id}>
              <img
                src={element.docAvatar?.url}
                alt="doctor avatar"
              />
              <h4>{`${element.firstName} ${element.lastName}`}</h4>
              <div className="details">
                <p>Email: <span>{element.email}</span></p>
                <p>Phone: <span>{element.phone}</span></p>
                <p>Department: <span>{element.doctorDepartment}</span></p>
                <p>Gender: <span>{element.gender}</span></p>
                <div>
                  <button
                    style={{ justifyContent: "center", alignItems: "center", padding: "5px 10px", display: "block" }}
                    onClick={() => handleRemove(element._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>No Registered Doctors Found!</h2>
        )}
      </div>
    </section>
  );
};

export default Doctors;
