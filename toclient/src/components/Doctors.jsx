import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/maled.avif";
import profile2 from "../Assets/lad3.avif";
import profile3 from "../Assets/smiling-touching-arms-crossed-room-hospital-removebg-preview.png";
import profile4 from "../Assets/mardocw.avif";
import profile7 from "../Assets/ladydoc.jpg";
import profile6 from "../Assets/mard2.avif";
import profile5 from "../Assets/portrait-doctor__1_-removebg-preview.png";
import profile8 from "../Assets/malenew.avif";
import profile9 from "../Assets/maledocw.avif";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Sanjay Agrawal"
          title="Cardiologist"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Vineeta Gupta"
          title="Dermatologist"
          stars="4.8"
          reviews="1200"
        />
          <DoctorCard
          img={profile3}
          name="Dr. Shashwat Mishra"
          title="Neurologist"
          stars="4.8"
          reviews="2100"
        />
          <DoctorCard
          img={profile4}
          name="Dr. Rakesh Dixit"
          title="Opthalmologist"
          stars="4.8"
          reviews="1700"
        />
          <DoctorCard
          img={profile5}
          name="Dr. Shweta Pandey"
          title="General Physician"
          stars="4.6"
          reviews="1300"
        />
          <DoctorCard
          img={profile6}
          name="Dr.  Pulkit jain "
          title="General Surgeon"
          stars="4.8"
          reviews="900"
        />
          <DoctorCard
          img={profile7}
          name="Dr. Prachi Singh"
          title="Gynecologist"
          stars="4.8"
          reviews="700"
        />
          <DoctorCard
          img={profile8}
          name="Dr. Mohammad Arif"
          title="Gastroenterologist"
          stars="4.8"
          reviews="1000"
        />
        <DoctorCard
          img={profile9}
          name="Dr. Rahul Kumar"
          title="Dentist"
          stars="4.7"
          reviews="1500"
        />
        
      </div>
    </div>
  );
}

export default Doctors;
