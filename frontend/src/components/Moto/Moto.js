import React from "react";
import "./Moto.scss";
import Button from "@mui/material/Button";
import motoAsset1 from "./../../Assets/Moto_Assets/Image.jpg";
import carousel1 from "./../../Assets/Moto_Assets/Rectangle 5 (2).jpg";
// carousel imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Card Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// Card Images
import card1 from "./../../Assets/Moto_Assets/Rectangle 15.png";
import card2 from "./../../Assets/Moto_Assets/Rectangle 16.png";
import card3 from "./../../Assets/Moto_Assets/unsplash_Ox6SW103KtM.png";
import Philosphy from "../Philosphy/Philosphy";
import Resources from "../Resources/Resources";
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
      <div className="WhatWeDo px-[8rem] pt-20">
        <h3>what we do</h3>
        <h2>DIRECT, MENTOR & BUILD THE LEADERS OF TOMORROW</h2>
        <Slider {...settings} style={{ padding: "0 0" }}>
          <div>
            <img src={carousel1} alt="purpose" />
          </div>
          <div>
            <img src={carousel1} alt="purpose" />
          </div>
          <div>
            <img src={carousel1} alt="purpose" />
          </div>
          <div>
            <img src={carousel1} alt="purpose" />
          </div>
          <div>
            <img src={carousel1} alt="purpose" />
          </div>
        </Slider>
      </div>
      <Resources />
    </div>
  );
};

export default Moto;
