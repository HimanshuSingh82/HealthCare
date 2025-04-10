import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import About from "../components/About";

import Carousel from "../components/Carouself";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";
import HomeCircles from "../components/HomeCirles";
import Service from "../components/Service";
import Accordion from "../components/Accordion";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <HomeCircles/>
      <About />
      <Service/>
      <Doctors />
     <Carousel/>
<Accordion/>
<Gallery/>
<Location/>
      <Footer />
    </div>
  );
}

export default Home;
