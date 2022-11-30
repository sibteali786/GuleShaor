import React from "react";
import "./Hero.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-Container px-[4rem]">
      <h3>EMPOWERING YOUTH FOR FINANCIAL INDEPENDENCE.</h3>
      <p>
        Providing a demand-driven training system responsive to latest
        industrial trends.
      </p>
      <Link to="/profile-forms">
        <Button variant="contained">Register</Button>
      </Link>
    </div>
  );
};

export default Hero;
