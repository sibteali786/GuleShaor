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
      <div className="WhoWeAre">
        <div className="span-1">
          <h3>who we are</h3>
          <div className="imageDiv">
            <img src={motoAsset1} alt="our purpose" />
          </div>
        </div>
        <div className="span-2">
          <h4>Our philosophy</h4>
          <p>
            Pakistan has an extraordinary asset in the shape of a youth bulge,
            which means that the largest segment of our population consists of
            young people - around 63%. This youth bulge can translate into
            economic gains only if the youth have skills consistent with the
            requirements of a modern economy. Because of increasing population
            growth, Pakistan is facing difficulty in providing sufficient
            employment opportunities. The issue is becoming more serious with
            rapidly changing economies that require more innovative skills.
          </p>
        </div>
        <div className="span-3">
          <p>
            Our students getting professional education need to be updated about
            the latest market trends, their personalities need to be flexible
            and adaptive in order to exploit the market opportunities both at
            national and international level. So we are creating a demand-driven
            training system responsive to requirements of the job market that
            will enable youth to not depend on the government but make a living
            through freelancing and entrepreneurship. The system provides not
            only expert industrial mentorship and career counseling but also the
            awareness of free high quality learning resources over the internet
            and career opportunities.
          </p>
          <Button variant="contained">Learn More</Button>
        </div>
      </div>
      <div className="WhatWeDo px-[8rem]">
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
      <div className="letsColloborate py-[2rem] px-[4rem] sm:px-[2rem]">
        {/* Its better to convert the text part to collapse so that it can be accesed if needed. Pending Task */}
        <h3>let’s colloborate</h3>
        <h2>SUPPORT OUR YOUTH</h2>
        <div className="cards">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={card2}
                alt="A person lecturing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Referall & Direct Partnerships
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We offer an exclusive membership package for direct referrals
                  to our service. We work with organisations to create a
                  tailored workshop programme delivered at agreed intervals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={card3}
                alt="A person lecturing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Resource Alliance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We support our students by referring them to our partners for
                  additional support. They provide them with free learning
                  resources, such as academic and skill-building courses and
                  assets.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={card1}
                alt="A person lecturing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  University Student Chapter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If you would like to work with us as a volunteer we would love
                  to have you onboard! We require volunteers with a variety of
                  skills and experience so get in touch today to see how you can
                  help us to Elevate The Youth.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button id="buttonSection3" variant="contained">
            Collaborate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Moto;
