import {
  ButtonBase,
  Container,
  Button,
  Typography,
  TextField,
  IconButton,
  Grid,
  Collapse,
  Stack,
  Avatar,
  AvatarGroup,
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
import Courses from "../../components/Courses/Courses";
import { useDispatch, useSelector } from "react-redux";
import {
  listMentorDetails,
  listStudentsOfMentor,
} from "../../actions/mentorActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
const InstructorProfile = () => {
  const dispatch = useDispatch();
  const mentorDetail = useSelector((state) => state.mentorDetail);
  const studentsOfMentors = useSelector((state) => state.studentsOfMentors);
  const { loading, error, mentor } = mentorDetail;
  const { loadingStudents, errorStudents, students } = studentsOfMentors;
  const match = useParams();
  useEffect(() => {
    dispatch(listMentorDetails(match.id));
    dispatch(listStudentsOfMentor(match.id));
    if (Object.keys(mentor).length !== 0) {
      setInputFields(mentor.about.skills);
    }
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
        <Loader />
      ) : loading && loadingStudents ? (
        <Loader />
      ) : error && errorStudents ? (
        <Message>{error}</Message>
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
                <Avatar
                  alt={mentor.name}
                  src={mentor.mentorDetails.profilePicture}
                  sx={{
                    width: 120,
                    height: 120,
                    position: "relative",
                    top: "-10vh",
                  }}
                />
                <Grid
                  item
                  style={{ marginLeft: "2rem", height: "fit-content" }}
                >
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
              <Stack spacing={1}>
                {mentor.courses.map((course) => (
                  <Courses key={course._id} course={course} mentor={mentor} />
                ))}
              </Stack>
            </Container>
            <Container maxWidth="md" className="span-6">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <h2>Students</h2>
                </Grid>
                <Grid container item xs={12} alignItems="center">
                  <AvatarGroup
                    total={
                      Math.abs(5 - students.length) < 3
                        ? students.length + Math.abs(5 - students.length)
                        : Math.abs(5 - students.length)
                    }
                  >
                    {students.map((student, index) => {
                      if (index <= 2) {
                        return (
                          <Avatar
                            src={student.studentDetails.profilePicture}
                            alt={student.name}
                            sx={{
                              width: 50,
                              height: 50,
                            }}
                          />
                        );
                      } else {
                        return false;
                      }
                    })}
                  </AvatarGroup>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#5F5F5F",
                      fontWeight: "bold",
                    }}
                  >
                    {mentor.studentDescription}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="sm" className="span-4">
              <h2>Videos</h2>
              <Player
                playsInline
                poster={mentor.introVideo.videoPoster}
                src={mentor.introVideo.video}
              >
                <BigPlayButton position="center" />
              </Player>
            </Container>
            <Container maxWidth="sm" className="span-2">
              <h4>Photos</h4>
              <ImageList cols={2} rowHeight={164}>
                {mentor.mentorDetails.otherImages.map((image, idx) => (
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
