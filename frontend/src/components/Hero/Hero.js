import React from "react";
import "./Hero.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//  image

const Hero = ({ isAuthenticated }) => {
  return (
    <div className="hero-Container px-[4rem]  ">
      {isAuthenticated ? (
        <h2>Expert Mentorship for Your Success: Ask Your Question Now!</h2>
      ) : (
        <h2>Get Expertise You Need</h2>
      )}
      {isAuthenticated ? (
        <p className="text-md">
          We connect students with experienced mentors who provide personalized
          advice based on their queries. Ask your question and we'll match you
          with a mentor who has expertise in your field of interest. Sign up now
          and take the first step towards a successful future!
        </p>
      ) : (
        <p className="text-md">
          At Guleshaoor Acquire latest IT skills in demand, update on changing
          trends in the fast-paced world of technology, and land your dream job
          with our hands-on projects and expert guidance. Our mentors are top
          industry professionals ready to support you in your journey
        </p>
      )}
      <div className="flex flex-row space-x-4">
        {isAuthenticated ? (
          <Button
            variant="contained"
            // className="bg-orange-300 text-gray-700 hover:bg-gray-700 hover:text-orange-300 font-semibold"
            //   changed
            className="bg-[#111111] text-white text-[18px] min-[320px]:pt-[.5rem] min-[320px]:px-[2rem] rounded-full mt-[.5rem]"
          >
            Ask Your Question Now
          </Button>
        ) : (
          <Link to="/profile-forms">
            <Button
              variant="contained"
              className="bg-[#111111] text-white text-[18px] min-[320px]:pt-[.5rem] min-[320px]:px-[2rem] rounded-full mt-[.5rem]"
            >
              Start Today
            </Button>
          </Link>
        )}
      </div>
      {/*         for image */}
      {/* <div>
        <image src="../../../public/images/check.jpeg" alt="image" />
      </div> */}
    </div>
  );
};

export default Hero;
