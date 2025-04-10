import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import "../Styles/Notification.css"
const Notification = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getone",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);
  return (
    <div className="noti">
    <div className='bannern'>
      <h3 className="dt-title rv nv">
        <span> Your Appointment</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Mode</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          {appointments && appointments.length > 0
            ? appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                <td>{appointment.appointment_date.substring(0, 16)}</td>
                <td>{appointment.appointment_time.substring(0, 16)}</td>
                <td>{appointment.mode}</td>
                <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                <td>{appointment.department}</td>
                <td>



                  {`${appointment.status}`}

                </td>

              </tr>
            ))
            : "No Appointments Found!"}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Notification