import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../Styles/Info.css";
import img1 from "../Assets/ambulance.png"
import img2 from "../Assets/online-appointment.png"
import img3 from "../Assets/working-time (1).png"
function Info() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="info-section" id="services">


      <div className="info-cards-content">



        <div className="why div " data-aos="slide-up" data-aos-easing="linear" data-aos-duration="500" data-aos-offset="100">
          <h3 className="info-title">Why Choose Us?</h3>
          <p className="info-description">
            Discover the reasons to choose HealthCare Plus for your healthcare needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.
          </p>
          <button
            className="btn learn"
            type="button"

          >
            Learn More
          </button>
        </div>
        <div className="emergency div" data-aos="slide-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-offset="100">
          <img src={img1}></img>
          <h3 className="info-titled">Emergency Cases</h3>
          <p className="info-descriptiond">
            +918318058248
            <br></br>Our Emergency Care service is designed to be your reliable support
            in critical situations.
            Any medical concern that requires immediate attention,
            we  are available 24 × 7.
          </p>
        </div>
        <div className="emergency div" data-aos="slide-up" data-aos-easing="linear" data-aos-duration="1500" data-aos-offset="100">

          <img src={img2}></img>
          <h3 className="info-titled">Appointment</h3>
          <p className="info-descriptiond">
            An easy way to get medical advice from specilalist doctors.
            Just select a doctor and book an appointment.
            Our team will connect you to your doctor.
            You can talk to  your doctor and get medical advices.
          </p>
        </div>
        <div className="emergency div" data-aos="slide-up" data-aos-easing="linear" data-aos-duration="2000" data-aos-offset="100">
          <img src={img3}></img>
          <h3 className="info-titled">Working Hours</h3>
          <p className="info-descriptiond">
            
            Mon-Tues : 9:00 AM-5:00 PM<hr></hr><br></br>
            Wed-Fri: 10:00 AM-6:00 PM<hr></hr><br></br>
            Sat-Sun: 8:00 AM-8:00 PM<hr></hr>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
