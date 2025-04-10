import React, {useState} from 'react';
import "../Styles/Accordion.css";
import Doctor from "../Assets/docnation2.avif";
import { questions } from './Accdata';

import MyAccordion from './MyAccordion';

const Accordion = () => {
 
 
    const [data, setData] = useState(questions);
   


  return (
    <bodyfaq>
       <div className="about-image-contentf faqimg">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>
      <section className='main-div'>
       <h1>Frequently Asked Questions</h1> 
        
       { data.map((currelem)=>{
          return <MyAccordion key={currelem.id} {...currelem}/>  
        })
    }
    </section>
   

    </bodyfaq>
  )
}

export default Accordion