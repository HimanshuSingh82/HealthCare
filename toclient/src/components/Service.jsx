import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import InformationCard from "./InformationCard";

import "../Styles/Service.css";
import img2 from "../Assets/cardi.png"
import img1 from "../Assets/dentist.png"
import img3 from "../Assets/ortho.png"
import img4 from "../Assets/neuro.png"
import img5 from "../Assets/uro.png"
import img6 from "../Assets/dermatology.png"
function Service() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="info-sections" id="servicess">
      <div className="info-title-contents">
        <h3 className="info-titles">
          <span>Specialities</span>
        </h3>
        <p className="info-descriptions">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-contents">
        <InformationCard
          title="Dentist"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
            img ={img1}
        />

        <InformationCard
          title="Cardiology"
          description="Our team of experienced cardiologists and medical experts do everthing for  you.
           From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
            img = {img2}
        />

        <InformationCard
          title="Orthopedic"
          description="Live life  to the fullest as Our orthopedic team is dedicated to give your bones a strong and  a health life.
          You can do all your work without being worry for the pain.
          Now you can go wherever you want without any discomfort."
            img ={img3}
        />
        <InformationCard
          title="Neurology"
          description="Let the brain to be at rest Beacuse our  Neurology team will take care of your brain as you take care of your loved ones.
          our Neaurologist Experts will treat all problems related to nerves in best possible way. "
            img ={img4}
        />
        <InformationCard
          title="Urology"
          description="Set the track of your urinary system with our Urologist team.
          our team treat all kinds of problems of kidneys, uterers, bladder and urethra using modern equipments and technologies.
          "
            img ={img5}
        />
        <InformationCard
          title="Dermatalogy"
          description="Face the world with full of confidence as Our Dermatalogist will make your skin flawless by treating problems like acne,  darksSpots, pigmentation skin rashes and allergy and many more."
            img ={img6}
        />
      </div>
    </div>
  );
}

export default Service;