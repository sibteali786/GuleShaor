import { Container } from "@mui/material";
import React from "react";
import "./Courses.scss";
import { Player, BigPlayButton } from "video-react";
const Courses = ({ course,mentor }) => {
  return (
    <Container style={{ maxWidth: "250px" }}>
      <Player playsInline poster={course.poster} src={mentor.introVideo.video}>
        <BigPlayButton position="center" />
      </Player>
    </Container>
  );
};

export default Courses;
