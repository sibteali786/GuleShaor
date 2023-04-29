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
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./InstructorProfile.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// All the images in the page used
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Courses from "../../components/Courses/Courses";
import { useDispatch, useSelector } from "react-redux";
import {
  listMentorDetails,
  listStudentsOfMentor,
} from "../../actions/mentorActions";
import { InlineWidget } from "react-calendly";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
const InstructorProfile = () => {
  const dispatch = useDispatch();
  const studentDetail = useSelector((state) => state.studentDetail);
  const {
    loading: loadingStudentDetails,
    error: errorStudentDetails,
    student,
  } = studentDetail;
  const mentorDetail = useSelector((state) => state.mentorDetail);
  const studentsOfMentors = useSelector((state) => state.studentsOfMentors);
  const { loading, error, mentor } = mentorDetail;
  const { loadingStudents, errorStudents, students } = studentsOfMentors;
  const match = useParams();
  useEffect(() => {
    dispatch(listMentorDetails(match.id));
    dispatch(listStudentsOfMentor(match.id));
  }, [dispatch, match]);
  // For collapsing the read more panel
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div>
      {Object.keys(mentor)?.length === 0 ? (
        <Loader />
      ) : loading && loadingStudents ? (
        <Loader />
      ) : error && errorStudents ? (
        <Message>{error}</Message>
      ) : (
        <>
          <div className="px-[2rem] space-x-3 pt-[6rem] profileContainer flex flex-col lg:flex-row lg:justify-between">
            <div className="w-[100%] lg:w-[60%] xl:w-[60%]">
              {mentor?.name && mentor?.mentorDetails ? (
                <Row className="mt-0 bg-white rounded-md border-[1px] mx-0 border-slate-300 ">
                  <div className="backgroundPicture"></div>
                  <Col xs={12} className="px-4">
                    <Row style={{ height: "70px" }}>
                      <img
                        alt={mentor.name}
                        src={
                          !mentor?.mentorDetails?.image?.includes("/", 0)
                            ? "/" + mentor?.mentorDetails?.image
                            : mentor?.mentorDetails?.image
                        }
                        className="profileImage border-4 border-white rounded-full p-0"
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
                          <div className="flex justify-between items-baseline">
                            <h3 className="xs:text-md md:text-lg my-0">
                              {mentor.name}
                            </h3>
                            <Button
                              variant="contained"
                              className="px-[1rem] my-0 py-[0.2rem] capitalize font-semibold items-center bg-transparent text-blue-600"
                              startIcon={
                                <i className="fas fa-plus text-md"></i>
                              }
                            >
                              Follow
                            </Button>
                          </div>
                          <a
                            href="email:johnDoe"
                            className="no-underline text-sm my-0"
                          >
                            {mentor.mentorDetails?.username}
                          </a>
                          <p className="text-gray-800 text-xs tracking-wide mb-1">
                            {mentor?.about?.city}, {mentor?.about?.country}
                          </p>
                          {mentor?.mentorDetails?.interpersonal.length > 0 ? (
                            <div>
                              <Accordion className="shadow-none w-1/3 ">
                                <AccordionSummary
                                  className="p-0 m-0"
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <h6 className="m-0 sm:text-xs text-sm">
                                    Technical Skills
                                  </h6>
                                </AccordionSummary>
                                <AccordionDetails className="p-0">
                                  {mentor?.mentorDetails?.technical.map(
                                    (skill, idx) => (
                                      <p
                                        className="text-gray-700 my-0 text-sm"
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
                              <Accordion className="shadow-none w-1/3  mb-2">
                                <AccordionSummary
                                  className="p-0"
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <h6 className="m-0 sm:text-xs text-sm">
                                    Interpersonal Skills
                                  </h6>
                                </AccordionSummary>
                                <AccordionDetails className="p-0">
                                  {mentor?.mentorDetails?.interpersonal.map(
                                    (skill, idx) => (
                                      <p
                                        className="text-gray-700 my-0 text-sm"
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
                      {mentor?.about?.contact?.mobile?.length > 0 ? (
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
                    </Row>
                  </Col>
                </Row>
              ) : null}

              {mentor?.about ? (
                <div
                  className="bg-white rounded-md border-[1px] border-slate-300 my-2 py-4 px-4"
                  style={{ backgroundColor: "#F1F1F1" }}
                >
                  {mentor.about.details ? (
                    <>
                      {
                        // TODO: resolve skills box disappear when reload mentor page
                      }
                      <Collapse in={checked} collapsedSize={80}>
                        <h3 className="mb-2">About</h3>
                        <p className="text-gray-800 text-sm">
                          {mentor.about.details}
                        </p>
                      </Collapse>
                      {mentor?.about?.details.length > 100 ? (
                        <Button
                          onClick={handleChange}
                          className="text-blue-500 hover:text-blue-700 hover:cursor-pointer text-xs capitalize inline-block"
                          endIcon={
                            <i className="fas fa-chevron-down text-xs"></i>
                          }
                        >
                          Read More
                        </Button>
                      ) : null}
                    </>
                  ) : null}
                </div>
              ) : null}

              {mentor?.about?.education?.degree.length > 0 ? (
                <div
                  className="bg-white rounded-md border-[1px] border-slate-300 my-2 py-4 px-4 w-full  "
                  style={{ backgroundColor: "#F1F1F1" }}
                >
                  <h3 className="mb-4">Education</h3>
                  <div className=" mr-4 p-0 pb-2">
                    <div className="ml-2 mt-3 flex content-center justify-start">
                      <i className="fas fa-school text-4xl"></i>
                      <div className="ml-3">
                        <h6 className="m-0 mt-1">
                          {mentor?.about?.education?.university}
                        </h6>
                        <p className="text-gray-700 m-0 mb-1 text-sm">
                          Degree: {mentor?.about?.education?.degree}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {mentor?.certifications.length > 0 ? (
                <div
                  className="bg-white rounded-md border-[1px] border-slate-300 my-2 py-4 px-4 w-full  "
                  style={{ backgroundColor: "#F1F1F1" }}
                >
                  <h3 className="mb-4">Certifications</h3>
                  {mentor?.certifications.map((cert, idx) => (
                    <div className=" mr-4 p-0 pb-2">
                      <div className="ml-2 mt-3 flex content-center justify-start">
                        <i className="fas fa-certificate text-4xl"></i>
                        <div className="ml-3">
                          <h6 className="m-0 mt-1">{cert?.name}</h6>
                          <p className="text-gray-700 m-0 mb-1 text-sm">
                            {cert?.issuingOrg}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              {mentor.courses.length > 0 ? (
                <div className="bg-white rounded-md border-[1px] border-slate-300 px-4 py-4">
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
                </div>
              ) : null}

              {students?.length > 0 ? (
                <div className="bg-white rounded-md border-[1px] border-slate-300 px-4 py-4 my-2">
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
                                key={index}
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
                          className="text-sm"
                          style={{
                            fontFamily: "Montserrat",
                          }}
                        >
                          {mentor.aboutStudents}
                        </Typography>
                      ) : null}
                    </Grid>
                  </Grid>
                </div>
              ) : null}

              {mentor?.introVideo?.video?.length > 0 ? (
                mentor?.introVideo?.video.includes("youtube") ? (
                  <Row className="bg-white rounded-md border-[1px] border-slate-300 mx-0 px-4 py-4 my-2">
                    <Col xs={12} lg={6} className="span-4">
                      <h3>Videos</h3>
                      <ReactPlayer url={mentor.introVideo.video} />
                    </Col>
                  </Row>
                ) : null
              ) : null}

              {mentor.mentorDetails.otherImages.length > 0 ? (
                <Row className="bg-white rounded-md border-[1px] border-slate-300 px-4 mx-0 py-4 my-2">
                  <Col xs={12} lg={6} className="span-2">
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
                  </Col>
                </Row>
              ) : null}
            </div>
            <div className=" w-[100%] lg:w-[40%] xl:w-[40%] mb-2">
              <div className="bg-white rounded-md border-[1px] border-slate-300 px-4 py-4">
                <h2 className="text-gray-600 text-2xl mb-2">Book a Schedule</h2>
                {Object.keys(student).length > 0 ? (
                  <Link to={`/mentors/${mentor?._id}/addappointment`}>
                    <button className=" py-1 px-2 border-2 text-gray-700 border-gray-800 rounded-md my-2 bg-orange-300 hover:bg-gray-800 hover:text-white transition ease-in-out delay-80">
                      Book Appointment
                    </button>
                  </Link>
                ) : (
                  <Link to={`/mentors/${mentor?._id}/edit`}>
                    <button className=" py-1 px-2 border-2 text-gray-700 border-gray-800 rounded-md my-2 bg-orange-300 hover:bg-gray-800 hover:text-white transition ease-in-out delay-80">
                      Add Time Slots
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InstructorProfile;
