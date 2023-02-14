import React from "react";
import "./Hero.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-Container px-[4rem]">
      <h2>Get Expertise You Need</h2>
      <p className="text-md">
        At Guleshaoor Acquire latest IT skills in demand, update on changing
        trends in the fast-paced world of technology, and land your dream job
        with our hands-on projects and expert guidance. Our mentors are top
        industry professionals ready to support you in your journey
      </p>
      <Link to="/profile-forms">
        <Button
          variant="contained"
          className="bg-orange-300 text-gray-700 hover:bg-gray-700 hover:text-orange-300"
        >
          Start Today
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
