import React from 'react';
import '../Styles/Carousel.css';
import { items } from './Card';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

 
 
    
    const Carouself = () => {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 4
            },
            desktop: {
              breakpoint: { max: 3000, min: 1224 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1224, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 664, min: 0 },
              items: 1
            }
          };
        return (
            <div className="carousel-container">
             <h3 className="dt-title rv">
          <span>Reviews</span>
        </h3>
        
              
         
                    <Carousel 
                    draggable={true}
                    autoPlay={true}
                    infinite={true}
                    showDots={false}
                    autoPlaySpeed={2000}
                    responsive={responsive}
                    >{
        items.map((depart, index)=>{
            return (
                    <div className="card active" key={index}>
                        <img className="avatars" src={depart.imgSrc} alt="avatar"></img>
                        <span>
                            <div className="text">
                                <h3 className="name">{depart.name}</h3>
                                <i className="position">{depart.position}</i>
                                <p className="testimony">{depart.quote}</p>
                            </div>
                         
                        </span>
                    </div>
                    /* <div className="card rightCard">
                        <img className="avatars" src={depart.imgSrc} alt="avatar"></img>
                        <div className="text">
                            <h3 className="name">{depart.name}</h3>
                            <i className="position">{depart.position}</i>
                            <p className="testimony">{depart.quote}</p>
                        </div>
                    </div> */
                );})
        }
          
                    </Carousel>
              
            
            </div>
        )}
    
   


export default Carouself;