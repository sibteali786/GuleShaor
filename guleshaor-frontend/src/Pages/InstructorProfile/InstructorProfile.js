import {
  ButtonBase,
  Container,
  Button,
  Typography,
  TextField,
  IconButton,
  Grid,
  Collapse,
} from "@mui/material";
import "./../../../node_modules/video-react/dist/video-react.css";
import React, { useState, useEffect } from "react";
import "./InstructorProfile.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// All the images in the page used
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
import { Player, BigPlayButton } from "video-react";
import axios from "axios";
import Courses from "../../components/Courses/Courses";
const InstructorProfile = () => {
  const match = useParams();
  const [mentor, setMentor] = useState({});
  useEffect(() => {
    const fetchMentor = async () => {
      const { data } = await axios.get(`/api/mentors/${match.id}`);
      setMentor(data);
      setInputFields(data.about.skills)
    };

    fetchMentor();
    console.log(Object.keys(mentor).length);
    // eslint-disable-next-line
  }, []);
  const [inputFields, setInputFields] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const handleAddFields = () => {
    if (inputValue === "") {
      console.log("Not Allowed");
    } else {
      setInputFields([...inputFields, inputValue]);
    }
  };
  // For collapsing the read more panel
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div>
      {Object.keys(mentor).length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div className="Instrcutor-container">
          <div className="backgroundPicture"></div>
          <Container maxWidth="lg" className="grids">
            <Grid
              container
              spacing={2}
              alignItems="flex-start"
              justifyContent="space-between"
              style={{ marginTop: "0px" }}
              className="span-1"
            >
              <Grid item className="instName">
                <ButtonBase
                  sx={{
                    width: 150,
                    height: 150,
                    position: "relative",
                    top: "-10vh",
                  }}
                >
                  <img
                    alt={mentor.name}
                    src={mentor.mentorDetails.profilePicture}
                    style={{ width: "100%" }}
                  />
                </ButtonBase>
                <Grid item style={{ marginLeft: "2rem" }}>
                  <h3>{mentor.name}</h3>
                  <a href="email:johnDoe">{mentor.mentorDetails.username}</a>
                  {mentor.about.hobbies.map((hobby, idx) => (
                    <p key={idx}>{hobby}</p>
                  ))}
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#196AA0", borderRadius: "1.3rem" }}
                >
                  Follow
                </Button>
              </Grid>
            </Grid>
            <Container
              maxWidth="md"
              style={{ backgroundColor: "#F1F1F1", borderRadius: "1rem" }}
              className="span-3"
            >
              <Collapse in={checked} collapsedSize={150}>
                <h2>{mentor.about.heading}</h2>
                <Typography variant="body2">{mentor.about.details}</Typography>
              </Collapse>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {inputFields.map((inputField, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    size="small"
                    style={{
                      color: "#76A4CE",
                      backgroundColor: "#FFF",
                      borderRadius: "1rem",
                      margin: "0.2rem",
                    }}
                  >
                    #{inputField}
                  </Button>
                ))}
                <TextField
                  label="Skill"
                  onChange={(e) => {
                    setinputValue(e.target.value);
                  }}
                  size="small"
                />
                <IconButton
                  onClick={() => handleAddFields()}
                  style={{
                    color: "#76A4CE",
                    backgroundColor: "#FFF",
                    borderRadius: "2rem",
                    margin: "0.5rem",
                  }}
                >
                  <AddIcon />
                </IconButton>
                <Button
                  variant="text"
                  style={{ fontWeight: "bold", color: "#196AA0" }}
                  onClick={handleChange}
                >
                  Read More
                </Button>
              </div>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <Button
                  variant="text"
                  style={{
                    fontWeight: "bold",
                    color: "#196AA0",
                    textTransform: "capitalize",
                  }}
                >
                  More Posts by {mentor.name}
                </Button>
              </Link>
            </Container>
            <Container maxWidth="md" className="span-5">
              <h2>Offered Courses</h2>
              <div >
                {mentor.courses.map((course, idx) => (
                  <Courses key={idx} course={course} mentor={mentor} />
                ))}
              </div>
            </Container>
            <Container maxWidth="md" className="span-6">
              <h2>Students</h2>
              <Typography variant="body2">{mentor.studentDescription}</Typography>
            </Container>
            <Container maxWidth="sm" className="span-4">
              <h2>Videos</h2>
              <Player playsInline poster={mentor.introVideo.videoPoster} src={mentor.introVideo.video}>
                <BigPlayButton position="center" />
              </Player>
            </Container>
            <Container maxWidth="sm" className="span-2">
              <h4>Photos</h4>
              <ImageList cols={2} rowHeight={164}>
                {mentor.mentorDetails.otherImages.map((image,idx) => (
                  <ImageListItem key={idx}>
                    <img
                      src={image}
                      srcSet={image}
                      alt={mentor.name}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <Button
                variant="text"
                style={{ fontWeight: "bold", color: "#196AA0" }}
              >
                More +
              </Button>
            </Container>
          </Container>
        </div>
      )}
    </div>
  );
};

export default InstructorProfile;
