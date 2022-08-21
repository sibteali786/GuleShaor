import { Grid } from "@mui/material";
import React from "react";
import "./Team.scss";
import profile from "../../Assets/Team/Profile Pic.png";
import sibteali from "../../Assets/Team/sibteali.png";
import izza from "../../Assets/Team/izza.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
const Team = () => {
  const teams = [
    {
      name: "Sibteali Baqar",
      designation: "Mern Stack and Finance",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident? Amet ut porro libero nam!",
      profilePic: sibteali,
      socialMedia: [
        "https://github.com/sibteali786",
        "https://www.linkedin.com/in/syed-sibteali-baqar-03167a17a/",
        "https://medium.com/@sibteali786",
        "https://sibtealibqar.netlify.app/",
      ],
    },
    {
      name: "Izza Gul Awan",
      designation: "Founder, Marketing and Core Operations",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident? Amet ut porro libero nam!",
      profilePic: izza,
      socialMedia: [
        "https://www.linkedin.com/in/izza-gul-awan-399146197",
        "https://www.instagram.com/izzagul_awan?r=nametag",
      ],
    },
    {
      name: "Abdullah Wasi",
      designation: "UI/UX and Content Writer",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident? Amet ut porro libero nam!",
      profilePic: profile,
      socialMedia: ["https://abdullahwasi.com/"],
    },
  ];
  return (
    <Grid
      container
      justifyContent="center"
      className="team-container"
      alignItems="center"
      spacing={3}
      style={{ marginTop: "0" }}
    >
      <Grid
        item
        container
        xs={12}
        md={6}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <h1>The Team</h1>
        </Grid>
        <Grid item>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quia error sequi molestias quidem delectus accusantium porro rerum
            perspiciatis, minima alias. Excepturi nisi sit laudantium error
            natus totam sequi doloremque!
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
          {teams.map((team, index) => (
            <SwiperSlide style={{ overflow: "visible" }}>
              <img className="img img-1" src={team.profilePic} />
              <div className="name">{team.name}</div>
              <div className="title">{team.designation}</div>
              <div className="desc">{team.about}</div>
              <div className="actions">
                {team.socialMedia.map((s) => (
                  <a href={s} className="link" target="_blank" rel="noreferrer">
                    <button className="actionButton">
                      {s.includes("github") ? (
                        <i class="fa-brands fa-github"></i>
                      ) : s.includes("linkedin") ? (
                        <i class="fa-brands fa-linkedin"></i>
                      ) : s.includes("medium") ? (
                        <i class="fa-brands fa-medium"></i>
                      ) : s.includes("instagram") ? (
                        <i class="fa-brands fa-instagram"></i>
                      ) : (
                        <i class="fa-regular fa-eye"></i>
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
