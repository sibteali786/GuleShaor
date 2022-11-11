import React from "react";
import "./Hero.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto max-w-10xl ">
        <div className="relative shadow-xl sm:overflow-hidden ">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-20 sm:px-6 sm:py-24 lg:py-40 lg:px-8">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Empovering Youth For</span>
              <span className="block text-indigo-200">
                Financial Independence
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-100 sm:max-w-3xl">
              Providing a demand-driven training system responsive to latest
              industrial trends.
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <a
                href="/profile-forms"
                className="flex items-center justify-center no-underline rounded-md border border-transparent bg-secondaryColor px-4 py-2 text-base font-medium text-tertiaryColor shadow-sm hover:bg-tertiaryColor hover:text-white sm:px-8"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
