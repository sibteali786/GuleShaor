import React, { useState, useEffect } from "react";
import "./Services.scss";

// Card Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button } from "@mui/material";

// Card Images
import card1 from "./../../Assets/Moto_Assets/Rectangle 15.png";
import card2 from "./../../Assets/Moto_Assets/Rectangle 16.png";
import card3 from "./../../Assets/Moto_Assets/unsplash_Ox6SW103KtM.png";
import card4 from "./../../Assets/Service/lowerSectionImage.png";

const Services = () => {
  const [cardActivate, setCardActivate] = useState(0);

  const handleChange = (event) => {
    const indexValue = event.target.getAttribute("index");
    if (+indexValue === 0) {
      setCardActivate(+indexValue);
    } else if (+indexValue === 1) {
      setCardActivate(+indexValue);
    } else if (+indexValue === 2) {
      setCardActivate(+indexValue);
    }
  };
  useEffect(() => {}, [cardActivate]);

  return (
    <div className="service-container">
      <div className="svg-container">
        <h2>Our Services</h2>
        <div class="custom-shape-divider-top-1653762327">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
          {/* <svg
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect x="0" y="0" width="900" height="600" fill="#252C33"></rect>
            <path
              d="M0 529L900 422L900 601L0 601Z"
              fill="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </svg> */}
        </div>
      </div>
      <div className="cardsDiv">
        <Card>
          <CardContent>
            <CardMedia component="img" image={card2} alt="A person lecturing" />
            <Typography gutterBottom variant="h5" component="div">
              Referall & Direct Partnerships
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We offer an exclusive membership package for direct referrals to
              our service. We work with organisations to create a tailored
              workshop programme delivered at agreed intervals.
            </Typography>
          </CardContent>

          <Button variant="contained" index={0} onClick={handleChange}>
            Expand
          </Button>
        </Card>
        <Card>
          <CardContent>
            <CardMedia component="img" image={card3} alt="A person lecturing" />
            <Typography gutterBottom variant="h5" component="div">
              Service Exchange
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We work with organisations, education providers, charities and
              youth projects to deliver our services. We support our partners by
              referring young people to services for additional support. They
              work with us by referring young people with an interest in or
              studying construction.
            </Typography>
          </CardContent>
          <Button variant="contained" index={1} onClick={handleChange}>
            Expand
          </Button>
        </Card>
        <Card>
          <CardContent>
            <CardMedia component="img" image={card1} alt="A person lecturing" />
            <Typography gutterBottom variant="h5" component="div">
              Volunteering Oppurtunities
            </Typography>
            <Typography variant="body2" color="text.secondary">
              If you would like to work with us as a volunteer we would love to
              have you onboard! We require volunteers with a variety of skills
              and experience so get in touch today to see how you can help us to
              Elevate The Youth.
            </Typography>
          </CardContent>
          <Button variant="contained" index={2} onClick={handleChange}>
            Expand
          </Button>
        </Card>
      </div>
      <div style={{padding:"2rem" }}>
        {(() => {
          if (cardActivate === 0) {
            return (
              <div className="cardExpandSection">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer auctor elit in metus faucibus luctus. Vivamus dapibus
                  ligula quis tellus suscipit fermentum. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Nunc posuere massa et metus maximus, imperdiet lobortis
                  augue finibus. Quisque eget pretium mi, id aliquam orci.
                  Maecenas porttitor quam ipsum, vitae faucibus sapien fermentum
                  a. Integer porta orci ac turpis convallis consectetur. Nullam
                  facilisis ultrices metus, et pulvinar ante pretium quis.
                  Aliquam vitae neque et purus pretium porttitor. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Sed sed cursus erat. Quisque scelerisque,
                  quam vel malesuada convallis, dolor nulla pellentesque sapien,
                  porttitor mattis ligula orci id diam. Vestibulum consequat sem
                  et varius mollis. Nulla sed justo vulputate, pellentesque enim
                  in, mattis odio. Sed scelerisque, dolor at venenatis
                  vestibulum, massa velit mollis quam, at varius risus nisl sit
                  amet neque. Proin vehicula lectus non quam molestie dapibus.
                  Duis lacus eros, tempus at pharetra et, posuere sed dolor. Sed
                  eu massa vitae nibh sodales commodo vel in mi. Mauris ut
                  congue mi. Integer cursus massa ultrices ligula facilisis
                  viverra. Maecenas venenatis, metus eu maximus porttitor, massa
                  orci iaculis lectus, vitae posuere justo orci eget arcu. Ut at
                  enim purus. Fusce tempor rutrum augue, vitae suscipit tellus
                  scelerisque et. Donec sed libero vel libero blandit congue.
                  Nulla fermentum, nulla non vestibulum sodales, nisl nisi porta
                  metus, eu imperdiet dui lorem vel lorem. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus.
                </p>
                <img src={card4} alt="service section" />
              </div>
            );
          } else if (cardActivate === 1) {
            return <div>Two</div>;
          } else if (cardActivate === 2) {
            return <div>Three</div>;
          }
        })()}
      </div>
    </div>
  );
};

export default Services;
