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
import React, { useState } from "react";
import "./InstructorProfile.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// All the images in the page used 
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
import { Player, BigPlayButton } from "video-react";
import users from "../../users";
const InstructorProfile = () => {
  const match = useParams();
  const user = users.find(p => p.id === match.id);
  const [inputFields, setInputFields] = useState(user.skills);
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
              <img alt={user.name} src={user.profilePicture} style={{ width: "100%" }} />
            </ButtonBase>
            <Grid item style={{ marginLeft: "2rem" }}>
              <h3>{user.name}</h3>
              <a href="email:johnDoe">{user.username}</a>
              {user.hobbies.map((hobby,idx) => (
                <p key={idx}>
                  {hobby}
                </p>
              ) )}
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

          <h2>{user.descriptionHeading}</h2>
          <Typography variant="body2">
            {user.description}
          </Typography>
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
              onClick = {handleChange}
            >
              Read More
            </Button>
          </div>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              style={{ fontWeight: "bold", color: "#196AA0", textTransform:"capitalize" }}
            >
              More Posts by {user.name}
            </Button>
          </Link>
        </Container>
        <Container maxWidth="md" className="span-5">
          <h2>Offered Courses</h2>
          <div style={{ display: "flex", direction: "row" }}>
            {user.offeredCoursesVideosPosters.map((poster,idx) => (
            <Container key={idx} style={{ maxWidth: "250px" }}>
              <Player
                playsInline
                poster={poster}
                src={user.video}
              >
                <BigPlayButton position="center" />
              </Player>
            </Container>

            ))}
          </div>
        </Container>
        <Container maxWidth="md" className="span-6">
          <h2>Students</h2>
          <Typography variant="body2">
            {user.studentDescription}
          </Typography>
        </Container>
        <Container maxWidth="sm" className="span-4">
          <h2>Videos</h2>
          <Player
            playsInline
            poster={user.videoPoster}
            src={user.video}
          >
            <BigPlayButton position="center" />
          </Player>
        </Container>
              <Container maxWidth="sm" className="span-2">
                <h4>Photos</h4>
                <ImageList cols={2} rowHeight={164}>
                  {user.otherImages.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={item}
                        srcSet={item}
                        alt={user.name}
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
  );
};

export default InstructorProfile;
