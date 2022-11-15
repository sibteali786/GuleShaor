import React, { useState, useEffect } from "react";
import "./Services.scss";

// Card Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Card Images
import card1 from "./../../Assets/Service/service1.jpg";
import card2 from "./../../Assets/Service/service2.jpg";
import card3 from "./../../Assets/Service/service3.jpg";
import card4 from "./../../Assets/Service/lowerSectionImage.jpg";
import ActionButton from "../../components/ActionButton/ActionButton";

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
        <h1>Our Services</h1>
        <div className="custom-shape-divider-top-1653762327">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="cardsDiv">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card>
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

              <Button
                variant="text"
                index={0}
                onClick={handleChange}
                style={{ display: "flex", flexDirection: "column" }}
              >
                Expand
                <i className="fa-solid fa-angle-down"></i>
              </Button>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
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
              <Button
                variant="text"
                index={1}
                onClick={handleChange}
                style={{ display: "flex", flexDirection: "column" }}
              >
                Expand
                <i className="fa-solid fa-angle-down"></i>
              </Button>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
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
              <Button
                variant="text"
                index={2}
                onClick={handleChange}
                style={{ display: "flex", flexDirection: "column" }}
              >
                Expand
                <i className="fa-solid fa-angle-down"></i>
              </Button>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="cardExpand-Container"
        style={{ padding: "2rem", height: "100vh" }}
      >
        {(() => {
          if (cardActivate === 0) {
            return (
              <div className="cardExpandSection">
                <div className="textPart">
                  <Typography gutterBottom variant="h5" component="div">
                    Referall & Direct Partnerships
                  </Typography>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis, dolorem? Minus reprehenderit quia culpa sapiente
                    adipisci odit dolorum dignissimos voluptatibus. Sunt vel,
                    eos ex vero quidem corrupti similique exercitationem. Beatae
                    molestiae odio aspernatur quas explicabo. Officia a id
                    impedit totam beatae quia, illo facere eius minus, sunt nemo
                    consequuntur maiores?
                  </p>
                  <ActionButton variant="Text" />
                </div>
                <img src={card4} alt="service section" />
              </div>
            );
          } else if (cardActivate === 1) {
            return (
              <div className="cardExpandSection">
                <div className="textPart">
                  <Typography gutterBottom variant="h5" component="div">
                    Service Exchange
                  </Typography>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima, minus possimus? Modi eum magni saepe adipisci
                    repellat quos consequatur ab sit doloremque, vero, expedita
                    enim sapiente fugiat temporibus facilis itaque cumque,
                    similique nobis totam excepturi placeat? Saepe eum, dolorem
                    nisi, beatae, perferendis ipsa explicabo sint nemo eaque sit
                    nobis ratione!
                  </p>
                  <ActionButton variant="Text" />
                </div>
                <img src={card4} alt="service section" />
              </div>
            );
          } else if (cardActivate === 2) {
            return (
              <div className="cardExpandSection">
                <div className="textPart">
                  <Typography gutterBottom variant="h5" component="div">
                    Volunteering Opportunities
                  </Typography>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur odio doloribus adipisci accusantium, fugiat fuga
                    cum. Fugit tempore, iste quia ut nisi laborum similique
                    reprehenderit quos aspernatur. At cupiditate quod eum
                    sapiente quidem architecto iste exercitationem ullam
                    molestias animi quasi aperiam, asperiores, temporibus nulla
                    consectetur reiciendis, nobis sunt ipsa error fugiat facere
                    velit dolor excepturi? Quibusdam accusamus sed vero vel.
                  </p>
                  <ActionButton variant="Text" />
                </div>
                <img src={card4} alt="service section" />
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default Services;
