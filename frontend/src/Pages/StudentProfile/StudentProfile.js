import {
  Container,
  Button,
  Typography,
  TextField,
  IconButton,
  Grid,
  Collapse,
  Avatar,
} from "@mui/material";
import "./../../../node_modules/video-react/dist/video-react.css";
import React, { useState, useEffect } from "react";
import "./StudentProfile.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// All the images in the page used
import profileImage from "../../Assets/ProfilesImages/Profile Pic.png";
import user1 from "../../Assets/ProfilesImages/Ellipse1.png";
import user2 from "../../Assets/ProfilesImages/Ellipse2.png";
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
import { Player, BigPlayButton } from "video-react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { listStudentDetails } from "../../actions/studentActions";
const UserProfile = () => {
  const dispatch = useDispatch();
  const studentDetail = useSelector((state) => state.studentDetail);
  const { loading, error, student } = studentDetail;
  const match = useParams();
  useEffect(() => {
    dispatch(listStudentDetails(match.id));
    if (Object.keys(student).length !== 0) {
      setInputFields(student.about.skills);
    }
    // eslint-disable-next-line
  }, [student]);
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
    <>
      {Object.keys(student).length === 0 ? (
        <Loader />
      ) : loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="student-container">
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
                  alt={student.name}
                  src={student.studentDetails.profilePicture}
                  sx={{
                    width: 120,
                    height: 120,
                    position: "relative",
                    top: "-10vh",
                  }}
                />
                <Grid item style={{ marginLeft: "2rem" }}>
                  <h3>{student.name}</h3>
                  <a href="email:johnDoe">{student.studentDetails.username}</a>
                  {student.about.hobbies.map((hobby, idx) => (
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
              <Collapse in={checked} collapsedSize={200}>
                <h2>{student.about.heading}</h2>
                <Typography variant="body2">{student.about.details}</Typography>
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
                  style={{ fontWeight: "bold", color: "#196AA0" }}
                >
                  More Posts by {student.name}
                </Button>
              </Link>
            </Container>
            <Container maxWidth="sm" className="span-4">
              <h2>Videos</h2>
              <Player
                playsInline
                poster={student.introVideo.videoPoster}
                src={student.introVideo.video}
              >
                <BigPlayButton position="center" />
              </Player>
            </Container>
            <Container maxWidth="sm" className="span-2">
              <h4>Photos</h4>
              <ImageList cols={2} rowHeight={164}>
                {student.studentDetails.otherImages.map((image, idx) => (
                  <ImageListItem key={idx}>
                    <img
                      src={image}
                      srcSet={image}
                      alt={student.name}
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
            <Container maxWidth="md" className="span-5">
              <div className="PostSection">
                <Avatar
                  alt="complex"
                  src={profileImage}
                  style={{ marginRight: "1rem" }}
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />

                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                </Typography>
              </div>
              <div className="comments">
                <Grid container flexDirection="column">
                  <Grid item display="flex" alignItems="center">
                    <Avatar
                      alt="complex"
                      src={user1}
                      sx={{
                        width: 60,
                        height: 60,
                      }}
                    />
                    <Grid item>
                      <h5>L uigi Gonzales</h5>
                      <p>5 days ago</p>
                    </Grid>
                  </Grid>
                  <div
                    style={{
                      backgroundColor: "#F1F1F1",
                      padding: "0.4rem",
                      borderRadius: "0.5rem",
                      margin: "0.6rem 0",
                    }}
                  >
                    Epic, interface looks lit.
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <i class="fa fa-thumbs-up"></i> 12
                  </div>
                </Grid>
                <Grid container flexDirection="column">
                  <Grid item display="flex" alignItems="center">
                    <Avatar
                      alt="complex"
                      src={user2}
                      sx={{
                        width: 60,
                        height: 60,
                      }}
                    />
                    <Grid item>
                      <h5>Luigi Gonzales</h5>
                      <p>5 days ago</p>
                    </Grid>
                  </Grid>
                  <div
                    style={{
                      backgroundColor: "#F1F1F1",
                      padding: "0.4rem",
                      borderRadius: "0.5rem",
                      margin: "0.6rem 0",
                    }}
                  >
                    Epic, interface looks lit.
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <i class="fa fa-thumbs-up"></i> 5
                  </div>
                </Grid>
                <div className="replies">
                  <Grid container flexDirection="column">
                    <Grid item display="flex" alignItems="center">
                      <Avatar
                        alt="complex"
                        src={user1}
                        sx={{
                          width: 60,
                          height: 60,
                        }}
                      />
                      <Grid item>
                        <h5>Mary Jane</h5>
                        <p>5 days ago</p>
                      </Grid>
                    </Grid>
                    <div
                      style={{
                        backgroundColor: "#F1F1F1",
                        padding: "0.4rem",
                        borderRadius: "0.5rem",
                        margin: "0.6rem 0",
                      }}
                    >
                      Epic, interface looks lit.
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <i class="fa fa-thumbs-up"></i> 2
                    </div>
                  </Grid>
                  <Grid container flexDirection="column">
                    <Grid item display="flex" alignItems="center">
                      <Avatar
                        alt="complex"
                        src={user2}
                        sx={{
                          width: 60,
                          height: 60,
                        }}
                      />
                      <Grid item>
                        <h5>Luigi Gonzales</h5>
                        <p>5 days ago</p>
                      </Grid>
                    </Grid>
                    <div
                      style={{
                        backgroundColor: "#F1F1F1",
                        padding: "0.4rem",
                        borderRadius: "0.5rem",
                        margin: "0.6rem 0",
                      }}
                    >
                      Epic, interface looks lit.
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <i class="fa fa-thumbs-up"></i> 7
                    </div>
                  </Grid>
                </div>
              </div>
              <div></div>
            </Container>
          </Container>
        </div>
      )}
    </>
  );
};

export default UserProfile;
