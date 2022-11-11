import React from "react";
import "./Moto.scss";
import Philosphy from "../Philosphy/Philosphy";
import Resources from "../Resources/Resources";
import SessionCall from "../sessionCall/SessionCall";
const settings = {
  // dots: true,
  className: "center",
  centerMode: true,
  speed: 500,
  slidesToShow: 3.05,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.05,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.45,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};
const Moto = () => {
  return (
    <div className="moto-container">
      <Philosphy />
      <SessionCall />
      <Resources />
    </div>
  );
};

export default Moto;
