import React from "react";
import "./Moto.scss";
import Button from "@mui/material/Button";
import motoAsset1 from "./../../Assets/Moto_Assets/Image.jpg";
import carousel1 from "./../../Assets/Moto_Assets/drsa.jpg";
import carousel2 from "./../../Assets/Moto_Assets/sk.jpg";
import carousel3 from "./../../Assets/Moto_Assets/ak.jpg";
import carousel4 from "./../../Assets/Moto_Assets/bk.jpg";
import carousel5 from "./../../Assets/Moto_Assets/mab.jpg";
import carousel6 from "./../../Assets/Moto_Assets/ua.jpg";
import carousel7 from "./../../Assets/Moto_Assets/saira.PNG";
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
import SessionCall from "../sessionCall/SessionCall";
import { Link } from "react-router-dom";
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
      <div className="WhoWeAre py-[2rem]">
        <div className="span-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">
            who we are
          </h3>
          <div className="imageDiv">
            <img src={motoAsset1} alt="our purpose" />
          </div>
        </div>
        <div className="span-2">
          <h3>Our philosophy</h3>
          <p>
            At Guleshaoor, we strive to equip you with the latest IT skills and
            stay up-to-date with the ever-evolving world of technology. Our
            mission is to provide you with hands-on projects, expert guidance,
            and mentorship from top industry professionals, so you can land your
            dream job.
          </p>
          <br />
          <p>
            Our team consists of experienced professionals in the tech industry
            who understand the importance of staying ahead of the curve in a
            fast-paced and competitive market. We believe in providing
            practical, real-world training that will not only enhance your
            technical abilities but also prepare you for success in the
            workplace.
          </p>
          <br />
          <p>
            We are passionate about technology and dedicated to helping you
            achieve your goals. Whether you're a beginner or a seasoned
            professional, our system is well designed to cater to your
            individual needs and provide a personalized learning experience.
            With our expert guidance, you will learn not just the theory but
            also the application of cutting-edge technologies in real-world
            scenarios.
          </p>
        </div>
        <div className="span-3">
          <p>
            Our mentors are top industry experts who bring a wealth of
            experience and knowledge to the table. They are dedicated to
            supporting you throughout your learning journey and providing you
            with the resources you need to succeed.
          </p>
          <Link to="/service" className="no-underline">
            <Button variant="contained">Learn More</Button>
          </Link>
        </div>
      </div>
      <div className="WhatWeDo px-[8rem]">
        <h3>Our Mentors</h3>
        <h2>DIRECT, MENTOR & BUILD THE LEADERS OF TOMORROW</h2>
        <Slider {...settings} style={{ padding: "0 0" }}>
          <div class="content">
            <div class="content-overlay"></div>
            <img src={carousel1} alt="purpose" />
            <div class="content-details fadeIn-bottom text-left">
              <h6 class="content-title md:text-lg text-white my-0">
                Dr. Shoab Khan
              </h6>
              <p className="text-sm text-white my-0">IT Expert</p>
            </div>
          </div>
          <div className="content">
            <div class="content-overlay"></div>
            <img src={carousel2} alt="purpose" />
            <div class="content-details fadeIn-bottom text-left">
              <h6 class="content-title md:text-lg text-white my-0">
                Miss Saba Kalsoom
              </h6>
              <p className="text-sm text-white my-0">Web 3.0 Expert</p>
            </div>
          </div>
          <div className="content">
            <div class="content-overlay"></div>
            <img src={carousel3} alt="purpose" />
            <div class="content-details fadeIn-bottom text-left">
              <h6 class="content-title md:text-lg text-white my-0">
                Mr. Arsalan Khattak
              </h6>
              <p className="text-sm text-white my-0">
                Mern Stack, MLH Coach, MLH Podcast Leader
              </p>
            </div>
          </div>
          <div className="content">
            <div class="content-overlay"></div>
            <img src={carousel4} alt="purpose" />
            <div class="content-details fadeIn-bottom text-left">
              <h6 class="content-title md:text-lg text-white my-0">
                Mr. Badar Khushnood
              </h6>
              <p className="text-sm text-white my-0">
                Commercialization Expert
              </p>
            </div>
          </div>
          <div className="content">
            <div class="content-overlay"></div>
            <img src={carousel5} alt="purpose" />
            <div class="content-details fadeIn-bottom text-left">
              <h6 class="content-title md:text-lg text-white my-0">
                Mr. Moazzam Arsalan Bhatti
              </h6>
              <p className="text-sm text-white my-0">Innovation expert</p>
            </div>
          </div>
          <div className="content">
            <div class="content-overlay"></div>
            <img src={carousel6} alt="purpose" />
            <div class="content-details fadeIn-bottom text-left">
              <h6 class="content-title md:text-lg text-white my-0">
                Dr. Usman Akram
              </h6>
              <p className="text-sm text-white my-0">
                Among Top 1% AI Researchers
              </p>
            </div>
          </div>
          <div className="content">
            <div class="content-overlay"></div>
            <img src={carousel7} alt="purpose" />
            <div class="content-details fadeIn-bottom text-left">
              <h6 class="content-title md:text-lg text-white my-0">
                Miss Saira Qayyum
              </h6>
              <p className="text-sm text-white my-0">Startup Expert</p>
            </div>
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
      <SessionCall />
    </div>
  );
};

export default Moto;
