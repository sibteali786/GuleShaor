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
import "./UserProfile.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// All the images in the page used
import profileImage from "../../Assets/ProfilesImages/Profile Pic.png";
import instructorImages from "../../Assets/ProfilesImages/instructorImages";
import Rectangle5 from "../../Assets/ProfilesImages/Rectangle 5.png";
import user1 from "../../Assets/ProfilesImages/Ellipse1.png";
import user2 from "../../Assets/ProfilesImages/Ellipse2.png";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Player, BigPlayButton } from "video-react";
const UserProfile = () => {
  const [inputFields, setInputFields] = useState([
    {
      inputValue: "#photography",
    },
  ]);
  const [inputValue, setinputValue] = useState("");
  const handleAddFields = () => {
    if (inputValue === "") {
      console.log("Not Allowed");
    } else {
      setInputFields([...inputFields, { inputValue }]);
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
              <img alt="complex" src={profileImage} style={{ width: "100%" }} />
            </ButtonBase>
            <Grid item style={{ marginLeft: "2rem" }}>
              <h3>John Doe</h3>
              <a href="email:johnDoe">@johndoe</a>
              <p>Astrophotographer 🌌</p>
              <p>Gamer 👾</p>
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
            <h2>How Astrophotography changed my life</h2>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros
              tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut
              vulputate nisi. Integer in felis sed leo vestibulum venenatis.
              Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
              vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu
              mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula
              vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam
              eget mi in purus lobortis eleifend. Sed nec ante dictum sem
              condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
              nisi, ac posuere leo.
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
                {inputField.inputValue}
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
              More Posts by John Doe
            </Button>
          </Link>
        </Container>
        <Container maxWidth="sm" className="span-4">
          <h2>Videos</h2>
          <Player
            playsInline
            poster={Rectangle5}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </Container>
        <Container maxWidth="sm" className="span-2">
          <h4>Photos</h4>
          <ImageList cols={2} rowHeight={164}>
            {instructorImages.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
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
            <img
              alt="complex"
              src={profileImage}
              style={{ marginRight: "1rem" }}
            />

            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </Typography>
          </div>
          <div className="comments">
            <Grid container flexDirection="column">
              <Grid item display="flex" alignItems="center">
                <img
                  alt="complex"
                  src={user1}
                  style={{ marginRight: "1rem" }}
                />
                <Grid item>
                  <h3>Luigi Gonzales</h3>
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
                <img
                  alt="complex"
                  src={user2}
                  style={{ marginRight: "1rem" }}
                />
                <Grid item>
                  <h3>Luigi Gonzales</h3>
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
                  <img
                    alt="complex"
                    src={user1}
                    style={{ marginRight: "1rem" }}
                  />
                  <Grid item>
                    <h3>Mary Jane</h3>
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
                  <img
                    alt="complex"
                    src={user2}
                    style={{ marginRight: "1rem" }}
                  />
                  <Grid item>
                    <h3>Luigi Gonzales</h3>
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
  );
};

export default UserProfile;
