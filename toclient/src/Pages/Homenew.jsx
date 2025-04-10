import React, { useContext } from "react";
import Hero from "../components/Heronew";
import Biography from "../components/Biographynew";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
    
      <Departments />
   
      <MessageForm />
    </>
  );
};

export default Home;