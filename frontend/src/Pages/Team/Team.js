import { Grid } from "@mui/material";
import React from "react";
import "./Team.scss";
import profile from "../../Assets/Team/Profile Pic.png";
import sibteali from "../../Assets/Team/sibteali.png";
import izza from "../../Assets/Team/izza.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
const Team = () => {
  const teams = [
    {
      name: "Izza Gul Awan",
      designation: "Founder, Marketing and Core Operations",
      about:
        "Our founder Miss Izza Gul Awan is a tech industry veteran who have a passion for helping others succeed. With a wealth of experience in the field, she brings a unique perspective and a deep understanding of the challenges facing individuals as they develop their skills and build their careers.",
      profilePic: izza,
      socialMedia: [
        "https://www.linkedin.com/in/izza-gul-awan-399146197",
        "https://www.instagram.com/izzagul_awan?r=nametag",
      ],
    },
    {
      name: "Sibteali Baqar",
      designation: "Technical Lead",
      about:
        "Mern Stack Developer, responsible for managing and developing the product along with communication across our organization regarding technical requirements, applying coding standards, taking care of application of performance, security and deployment stuff altogether",
      profilePic: sibteali,
      socialMedia: [
        "https://github.com/sibteali786",
        "https://www.linkedin.com/in/syed-sibteali-baqar-03167a17a/",
        "https://medium.com/@sibteali786",
        "www.sibtealibaqar.me",
      ],
    },
  ];
  return (
    <Grid
      container
      justifyContent="center"
      className="team-container px-[4rem] py-[6rem] mb-[2rem]"
      alignItems="center"
      spacing={3}
      style={{ marginTop: "0" }}
    >
      <Grid item container xs={12} md={6} alignItems="center">
        <Grid item className="text-left">
          <h1>The Team</h1>
        </Grid>
        <Grid item>
          <p>
            At Guleshaoor, we believe that success is a team effort. That's why
            we've brought together a group of talented, dedicated, and
            passionate individuals who are committed to helping individuals
            develop their tech skills and achieve their goals.
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent="center"
        style={{ marginTop: "4rem", marginBottom: "2rem" }}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{ margin: "0" }}
        >
          {teams.map((team) => (
            <SwiperSlide style={{ overflow: "visible" }} key={uuidv4()}>
              <img
                className="img img-1"
                src={team.profilePic}
                alt="team profiles"
              />
              <div className="name">{team.name}</div>
              <div className="title">{team.designation}</div>
              <div className="desc">{team.about}</div>
              <div className="actions">
                {team.socialMedia.map((s) => (
                  <a
                    href={s}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    key={uuidv4()}
                  >
                    <button className="actionButton">
                      {s.includes("github") ? (
                        <i className="fa-brands fa-github"></i>
                      ) : s.includes("linkedin") ? (
                        <i className="fa-brands fa-linkedin"></i>
                      ) : s.includes("medium") ? (
                        <i className="fa-brands fa-medium"></i>
                      ) : s.includes("instagram") ? (
                        <i className="fa-brands fa-instagram"></i>
                      ) : (
                        <i className="fa-regular fa-eye"></i>
                      )}
                    </button>
                  </a>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default Team;
