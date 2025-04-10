import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function InformationCard(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="info-cardss" data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <span className="info-card-icons">
        <img  className="info-fa-icons1"  src={props.img} />
      </span>
      <p className="info-card-titles">{props.title}</p>
      <p className="info-card-descriptions">{props.description}</p>
      
    </div>
  );
}

export default InformationCard;