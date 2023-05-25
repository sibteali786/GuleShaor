import React from "react";
import Hero from "./../../components/Hero/Hero";
import Moto from "./../../components/Moto/Moto";

const Home = ({ isAuthenticated }) => {
  return (
    <div>
      <Hero isAuthenticated={isAuthenticated} />
      <Moto />
    </div>
  );
};

export default Home;
