import React from "react";
import Hero from "./../../components/Hero/Hero";
import Moto from "./../../components/Moto/Moto";

const Home = ({ isAuthenticated }) => {
  return (
    <div className="pt-[3rem]">
      <Hero isAuthenticated={isAuthenticated} />
      <Moto />
    </div>
  );
};

export default Home;
