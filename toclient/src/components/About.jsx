import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Doctor from "../Assets/docnation.avif";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="about-section" id="about">
      <div className="about-image-content" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     >
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description" > 
          Welcome to HealthCare Plus, India's most trusted healthcare partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at HealthCare Plus. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
