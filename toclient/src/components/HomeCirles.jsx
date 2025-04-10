import React,{useEffect} from "react";
import CountUp from "react-countup";
import "../Styles/HomeCircles.css";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeCircles = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="container circles" >
      <div className="circle" data-aos="zoom-in" data-aos-duration="1500"  data-aos-easing="ease-in-sine" data-aos-offset="150">
        <CountUp
          start={0}
          end={100}
          delay={1}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name">
          Specialist
          <br />
          Doctors</span>
      </div>
      <div className="circle" data-aos="zoom-in" data-aos-duration="1500"  data-aos-easing="ease-in-sine" data-aos-offset="150">
        <CountUp
          start={0}
          end={250}
          delay={1}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name">
          Verified
          <br />
          Doctors
        </span>
      </div>
      
      <div className="circle" data-aos="zoom-in" data-aos-duration="1500"  data-aos-easing="ease-in-sine" data-aos-offset="150">
        <CountUp
          start={0}
          end={5000}
          delay={1}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name" >
          Satisfied
          <br />
          Patients
        </span>
      </div>
    </section>
  );
};

export default HomeCircles;