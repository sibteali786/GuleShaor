import React from "react";
import "./Moto.scss";
import Button from "@mui/material/Button";
import motoAsset1 from "./../../Assets/Moto_Assets/Image.png";
import carousel1 from "./../../Assets/Moto_Assets/Rectangle 5 (2).png";
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
          <h3 >who we are</h3>
          <div className="imageDiv">
            <img src={motoAsset1} alt="our purpose" />
          </div>
        </div>
        <div className="span-2">
          <h4>Our philosophy</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            imperdiet consectetur erat scelerisque. Ac malesuada amet facilisi
            sed enim. Habitant et consequat morbi lectus nibh in facilisis massa
            pretium. Porttitor et sed quis maecenas ultricies vitae fermentum
            habitasse. Turpis quam enim elit mauris volutpat tincidunt tortor,
            ut. Ac lacus montes, purus a leo enim. Natoque et egestas risus enim
            iaculis massa. Odio ornare lacus justo, vitae mattis massa. Lacus
            nec lectus eget leo, aliquet nisi pellentesque arcu malesuada. In
            facilisis varius suscipit at libero aliquam malesuada. Amet hac nibh
            donec feugiat feugiat. Natoque et egestas risus enim iaculis massa.
            Est in est imperdiet.
          </p>
        </div>
        <div className="span-3">
          <p>
            Odio ornare lacus justo, vitae mattis massa. Lacus nec lectus eget
            leo, aliquet nisi pellentesque arcu malesuada. In facilisis varius
            suscipit at libero aliquam malesuada. Amet hac nibh donec feugiat
            feugiat. Natoque et egestas risus enim iaculis massa. Est in est
            imperdiet arcu donec maecenas ac eget. Praesent enim, neque placerat
            quis tristique mauris laoreet etiam ut. Quis et vitae magna eu, in
            in. Aliquam quis nisl nulla lectus aliquam urna. Aenean ut faucibus
            placerat praesent vestibulum fusce ullamcorper. Id sed convallis
            nulla neque in sed. Sit sapien duis at mattis amet nulla maecenas
            eget justo.
          </p>
          <Button variant="contained">Get In Touch</Button>
        </div>
      </div>
      <div className="WhatWeDo">
        <h3>what we do</h3>
        <h2>MAKE, MENTOR & TEACH THE LEADERS OF TOMORROW</h2>
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
      <div className="letsColloborate">
        {/* Its better to convert the text part to collapse so that it can be accesed if needed. Pending Task */}
        <h3>let’s colloborate</h3>
        <h2>HELP US BRING CHANGE TO PEOPLE’S LIVES</h2>
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
                  Service Exchange
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We work with organisations, education providers, charities and
                  youth projects to deliver our services. We support our
                  partners by referring young people to services for additional
                  support. They work with us by referring young people with an
                  interest in or studying construction.
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
                  Volunteering Oppurtunities
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
        <div style={{textAlign:"center"}}>

        <Button id="buttonSection3" variant="contained">
          Collaborate
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Moto;
