import React, { useState, useEffect } from "react";
import "./Services.scss";

// Card Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
// Card Images
import card1 from "./../../Assets/Service/service1.jpg";
import card2 from "./../../Assets/Service/service2.jpg";
import card3 from "./../../Assets/Service/service3.jpg";
import card4 from "./../../Assets/Service/lowerSectionImage.jpg";

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
  const _plugins = [new Arrow()];
  return (
    <div className="service-container">
      <div className="svg-container">
        <h1>Our Services</h1>
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
        </div>
      </div>
      <div className="cardsDiv">
        <Flicking
          className="flicking-viewport"
          plugins={_plugins}
          horizontal={true}
          circularFallback="bound"
          circular={true}
          align="prev"
          panelsPerView={-1}
          autoResize={true}
        >
          <Card>
            <CardContent>
              <CardMedia
                component="img"
                image={card2}
                alt="A person lecturing"
              />
              <Typography gutterBottom variant="h5" component="div">
                Referall & Direct Partnerships
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer an exclusive membership package for direct referrals to
                our service. We work with organisations to create a tailored
                workshop programme delivered at agreed intervals.
              </Typography>
            </CardContent>

            <Button
              variant="text"
              index={0}
              onClick={handleChange}
              style={{ display: "flex", flexDirection: "column" }}
            >
              Expand
              <i class="fa-solid fa-angle-down"></i>
            </Button>
          </Card>

          <Card>
            <CardContent>
              <CardMedia
                component="img"
                image={card3}
                alt="A person lecturing"
              />
              <Typography gutterBottom variant="h5" component="div">
                Service Exchange
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We work with organisations, education providers, charities and
                youth projects to deliver our services. We support our partners
                by referring young people to services for additional support.
                They work with us by referring young people with an interest in
                or studying construction.
              </Typography>
            </CardContent>
            <Button
              variant="text"
              index={1}
              onClick={handleChange}
              style={{ display: "flex", flexDirection: "column" }}
            >
              Expand
              <i class="fa-solid fa-angle-down"></i>
            </Button>
          </Card>
          <Card>
            <CardContent>
              <CardMedia
                component="img"
                image={card1}
                alt="A person lecturing"
              />
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
            <Button
              variant="text"
              index={2}
              onClick={handleChange}
              style={{ display: "flex", flexDirection: "column" }}
            >
              Expand
              <i class="fa-solid fa-angle-down"></i>
            </Button>
          </Card>
          <ViewportSlot>
            <span className="flicking-arrow-prev is-circle"></span>
            <span className="flicking-arrow-next is-circle"></span>
          </ViewportSlot>
        </Flicking>
      </div>
      <div style={{ padding: "2rem" }}>
        {(() => {
          if (cardActivate === 0) {
            return (
              <div className="cardExpandSection">
                <Typography gutterBottom variant="h5" component="div">
                  Referall & Direct Partnerships
                </Typography>
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
