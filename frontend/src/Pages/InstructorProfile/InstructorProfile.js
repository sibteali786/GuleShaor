import {
  Button,
  Typography,
  Grid,
  Collapse,
  Stack,
  Avatar,
  AvatarGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Col, Container, Row } from "react-bootstrap";
import "./../../../node_modules/video-react/dist/video-react.css";
import React, { useState, useEffect } from "react";
import "./InstructorProfile.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// All the images in the page used
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
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
    // eslint-disable-next-line
  }, []);
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
        <>
          <div className="px-[4rem] profileContainer">
            <div className="w-4/6 pt-[6rem]">
              {mentor?.name && mentor?.mentorDetails ? (
                <Row className="mt-0 bg-white rounded-md border-[1px] border-slate-300 ">
                  <div className="backgroundPicture"></div>
                  <Col xs={12} className="px-4">
                    <Row style={{ height: "50px" }}>
                      <Avatar
                        alt={mentor.name}
                        src={"/" + mentor.mentorDetails.image}
                        className="profileImage"
                        style={{
                          transform: "translateY(-50px)",
                          width: "fit-content",
                          height: "100px",
                        }}
                      />
                    </Row>
                    <Row>
                      <Col xs={12} className="instName">
                        <div style={{ height: "fit-content" }}>
                          <h3 className="xs:text-xl md:text-2xl">
                            {mentor.name}
                          </h3>
                          <a href="email:johnDoe" className="no-underline">
                            {mentor.mentorDetails.username}
                          </a>
                          {mentor?.mentorDetails?.interpersonal.length > 0 ? (
                            <div>
                              <Accordion className="shadow-none w-1/2 ">
                                <AccordionSummary
                                  className="p-0 m-0"
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <h6 className="m-0 text-gray-600">
                                    Technical Skills
                                  </h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                  {mentor?.mentorDetails?.technical.map(
                                    (skill, idx) => (
                                      <p
                                        className="text-gray-500 my-0"
                                        key={idx}
                                      >
                                        {skill}
                                      </p>
                                    )
                                  )}
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          ) : null}
                          {mentor?.mentorDetails?.interpersonal.length > 0 ? (
                            <div>
                              <Accordion className="shadow-none w-1/2 ">
                                <AccordionSummary
                                  className="p-0"
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <h6 className="m-0 text-gray-600">
                                    Interpersonal Skills
                                  </h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                  {mentor?.mentorDetails?.interpersonal.map(
                                    (skill, idx) => (
                                      <p
                                        className="text-gray-500 my-0"
                                        key={idx}
                                      >
                                        {skill}
                                      </p>
                                    )
                                  )}
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      {mentor?.about?.contact ? (
                        <Col xs={12}>
                          <Accordion className="shadow-none w-1/2 ">
                            <AccordionSummary
                              className="p-0 m-0"
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <h6 className="text-blue-600">Contact Info</h6>
                            </AccordionSummary>
                            <AccordionDetails className="py-0 px-1">
                              <div className="my-2">
                                <i className="fas fa-phone text-2xl"></i>{" "}
                                {mentor?.about?.contact?.mobile}
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        </Col>
                      ) : null}
                      <Col
                        xs={12}
                        className="d-flex justify-start align-start mt-2 mb-4"
                      >
                        <Button
                          variant="contained"
                          className="py-1 hover:text-black "
                          style={{
                            backgroundColor: "#196AA0",
                            borderRadius: "1.3rem",
                          }}
                        >
                          Follow
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ) : null}

              {mentor?.about ? (
                <Row
                  className="bg-white rounded-md border-[1px] border-slate-300 my-2 py-4 px-2"
                  style={{ backgroundColor: "#F1F1F1" }}
                >
                  {mentor.about.details ? (
                    <>
                      {
                        // TODO: resolve skills box disappear when reload mentor page
                      }
                      <Collapse in={checked} collapsedSize={120}>
                        <h3 className="mb-4">About</h3>
                        <Typography variant="body2">
                          {mentor.about.details}
                        </Typography>
                      </Collapse>
                      <div
                        className="my-3"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
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
                    </>
                  ) : null}
                </Row>
              ) : null}

              {mentor?.about?.education ? (
                <div
                  className="bg-white rounded-md border-[1px] border-slate-300 my-2 py-4 px-4 w-full -mr-[1rem] -ml-[0.75rem] "
                  style={{ backgroundColor: "#F1F1F1" }}
                >
                  <h3 className="mb-4">Education</h3>
                  <div className="border-b-2 border-gray-200 mx-4 p-0">
                    <h5 className="ml-2">School</h5>
                    <div className="ml-2 mt-3">
                      <h6 className="m-0 mt-1">
                        {mentor?.about?.education?.school?.name}
                      </h6>
                      <p className="text-gray-700 m-0 mb-3 text-sm">
                        Passing Grade: {mentor?.about?.education?.school?.grade}
                      </p>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-200 mx-4 p-0">
                    <h5 className="ml-2 mt-4">College</h5>
                    <div className="ml-2 mt-3">
                      <h6 className="m-0 mt-1">
                        {mentor?.about?.education?.college?.name}
                      </h6>
                      <p className="text-gray-700 m-0 mb-3 text-sm">
                        Passing Grade:{" "}
                        {mentor?.about?.education?.college?.grade}
                      </p>
                    </div>
                  </div>
                  <div className=" mx-4 p-0">
                    <h5 className="ml-2 mt-4">University</h5>
                    <div className="ml-2 mt-3">
                      <h6 className="m-0 mt-1">
                        {mentor?.about?.education?.university?.name}
                      </h6>
                      <p className="text-gray-500 m-0">
                        {mentor?.about?.education?.university?.degree}
                      </p>
                      <p className="text-gray-700 m-0 mb-3 text-sm">
                        Passing Cumulative GPA:{" "}
                        {mentor?.about?.education?.university?.cgpa}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {mentor.courses.length > 0 ? (
                <Row className="bg-white rounded-md border-[1px] border-slate-300 px-2 py-4">
                  <>
                    <h3 className="mb-5">Offered Courses</h3>
                    <Stack spacing={1}>
                      {mentor.courses.map((course) => (
                        <Courses
                          key={course._id}
                          course={course}
                          mentor={mentor}
                        />
                      ))}
                    </Stack>
                  </>
                </Row>
              ) : null}

              <Row className="bg-white rounded-md border-[1px] border-slate-300 px-2 py-4 my-2">
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h2 className="mb-4">Students</h2>
                  </Grid>
                  <Grid container item xs={12} alignItems="center">
                    <AvatarGroup
                      total={
                        Math.abs(5 - students.length) < 5
                          ? students.length + Math.abs(5 - students.length)
                          : Math.abs(5 - students.length)
                      }
                    >
                      {students.map((student, index) => {
                        if (index <= 4) {
                          return (
                            <Avatar
                              src={student.studentDetails.image}
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
                    {mentor.aboutStudents ? (
                      <Typography
                        variant="body2"
                        style={{
                          fontFamily: "Montserrat",
                          color: "#5F5F5F",
                          fontWeight: "bold",
                        }}
                      >
                        {mentor.aboutStudents}
                      </Typography>
                    ) : null}
                  </Grid>
                </Grid>
              </Row>

              <Row className="bg-white rounded-md border-[1px] border-slate-300 px-2 py-4 my-2">
                <Col xs={12} lg={6} className="span-4">
                  <h3>Videos</h3>
                  <ReactPlayer url={mentor.introVideo.video} />
                </Col>

                <Col xs={12} lg={6} className="span-2">
                  {mentor.mentorDetails.otherImages.length > 0 ? (
                    <>
                      <h3>Photos</h3>
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
                    </>
                  ) : null}
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InstructorProfile;
