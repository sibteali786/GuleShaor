import {
  Button,
  Typography,
  Collapse,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect } from "react";
import "./StudentProfile.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// All the images in the page used
import profileImage from "../../Assets/ProfilesImages/Profile Pic.png";
import user1 from "../../Assets/ProfilesImages/Ellipse1.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { listStudentDetails } from "../../actions/studentActions";
import { Col, Row } from "react-bootstrap";
const UserProfile = () => {
  const dispatch = useDispatch();
  const studentDetail = useSelector((state) => state.studentDetail);
  const { loading, error, student } = studentDetail;
  const match = useParams();
  useEffect(() => {
    dispatch(listStudentDetails(match.id));
  }, [student, dispatch, match]);
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
        <div className="px-[4rem] student-container">
          <div className="w-4/6 pt-[6rem]">
            {student?.name && student?.studentDetails ? (
              <Row className="mt-0 bg-white rounded-md border-[1px] border-slate-300 ">
                <div className="backgroundPicture"></div>
                <Col xs={12} className="px-4">
                  <Row style={{ height: "70px" }}>
                    <img
                      alt={student.name}
                      src={
                        !student?.studentDetails?.image?.includes("/", 0)
                          ? "/" + student?.studentDetails?.image
                          : student?.studentDetails?.image
                      }
                      className="profileImage rounded-full"
                      style={{
                        transform: "translateY(-50px)",
                        width: "fit-content",
                        height: "100px",
                      }}
                    />
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div style={{ height: "fit-content" }}>
                        <h3 className="xs:text-xl md:text-2xl">
                          {student.name}
                        </h3>
                        <a href="email:johnDoe" className="no-underline">
                          {student.studentDetails.username}
                        </a>
                        {student?.studentDetails?.interpersonal.length > 0 ? (
                          <div>
                            <Accordion className="shadow-none w-1/2 ">
                              <AccordionSummary
                                className="p-0 m-0 w-full"
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                              >
                                <h6 className="m-0 text-gray-600">
                                  Technical Skills
                                </h6>
                              </AccordionSummary>
                              <AccordionDetails>
                                {student?.studentDetails?.technical.map(
                                  (skill, idx) => (
                                    <p className="text-gray-500 my-0" key={idx}>
                                      {skill}
                                    </p>
                                  )
                                )}
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        ) : null}
                        {student?.studentDetails?.interpersonal.length > 0 ? (
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
                                {student?.studentDetails?.interpersonal.map(
                                  (skill, idx) => (
                                    <p className="text-gray-500 my-0" key={idx}>
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
                    {student?.about?.contact?.mobile?.length > 0 ? (
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
                              {student?.about?.contact?.mobile}
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
            {student?.about ? (
              <Row
                className="bg-white rounded-md border-[1px] border-slate-300 my-2 py-4 px-2"
                style={{ backgroundColor: "#F1F1F1" }}
              >
                {student.about.details ? (
                  <>
                    {
                      // TODO: resolve skills box disappear when reload student page
                    }
                    <Collapse in={checked} collapsedSize={120}>
                      <h3 className="mb-4">About</h3>
                      <Typography variant="body2">
                        {student.about.details}
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
                        More Posts by {student?.name}
                      </Button>
                    </Link>
                  </>
                ) : null}
              </Row>
            ) : null}
            {student?.about?.education?.school?.name?.length > 0 ? (
              <div
                className="bg-white rounded-md border-[1px] border-slate-300 my-2 py-4 px-4 w-full -mr-[1rem] -ml-[0.75rem] "
                style={{ backgroundColor: "#F1F1F1" }}
              >
                <h3 className="mb-4">Education</h3>
                <div className="border-b-2 border-gray-200 mx-4 p-0">
                  <h5 className="ml-2">School</h5>
                  <div className="ml-2 mt-3">
                    <h6 className="m-0 mt-1">
                      {student?.about?.education?.school?.name}
                    </h6>
                    <p className="text-gray-700 m-0 mb-3 text-sm">
                      Passing Grade: {student?.about?.education?.school?.grade}
                    </p>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200 mx-4 p-0">
                  <h5 className="ml-2 mt-4">College</h5>
                  <div className="ml-2 mt-3">
                    <h6 className="m-0 mt-1">
                      {student?.about?.education?.college?.name}
                    </h6>
                    <p className="text-gray-700 m-0 mb-3 text-sm">
                      Passing Grade: {student?.about?.education?.college?.grade}
                    </p>
                  </div>
                </div>
                <div className=" mx-4 p-0">
                  <h5 className="ml-2 mt-4">University</h5>
                  <div className="ml-2 mt-3">
                    <h6 className="m-0 mt-1">
                      {student?.about?.education?.university?.name}
                    </h6>
                    <p className="text-gray-500 m-0">
                      {student?.about?.education?.university?.degree}
                    </p>
                    <p className="text-gray-700 m-0 mb-3 text-sm">
                      Passing Cumulative GPA:{" "}
                      {student?.about?.education?.university?.cgpa}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            {student?.studentDetails.otherImages.length > 0 ? (
              <Row className="bg-white rounded-md border-[1px] border-slate-300 px-2 py-4 my-2">
                <Col xs={12} lg={6} className="span-2">
                  <h3>Photos</h3>
                  <ImageList cols={2} rowHeight={164}>
                    {student?.studentDetails.otherImages.map((image, idx) => (
                      <ImageListItem key={idx}>
                        <img
                          src={image}
                          srcSet={image}
                          alt={student?.name}
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
            <Row className="span-5 bg-white rounded-md border-[1px] border-slate-300 px-2 py-4 my-2 ">
              <h2 className="my-3 ">Posts</h2>
              <div className="flex flex-col justify-between content-center">
                <div className="flex justify-start content-center">
                  <Avatar
                    alt="complex"
                    src={profileImage}
                    className="mr-2"
                    sx={{
                      width: 50,
                      height: 50,
                    }}
                  />
                  <div className="flex flex-col ml-3">
                    <h6 className="text-sm text-gray-600 my-0">
                      {student?.name}
                    </h6>
                    <p className="my-0 text-xs">5 days ago</p>
                  </div>
                </div>
                <p className="p-[0.4rem] text-sm  rounded-md my-[0.6rem] mx-[0rem] bg-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                </p>
                <div className="ml-3 my-2">
                  <i className="fa fa-thumbs-up text-sm text-gray-500 hover:cursor-pointer hover:text-gray-700"></i>{" "}
                  12
                </div>
              </div>
              <div className="border-l-2 pl-6 ml-4 mt-4">
                <div className="flex flex-col my-3">
                  <div className="flex justify-start content-center">
                    <Avatar
                      alt="complex"
                      src={user1}
                      sx={{
                        width: 40,
                        height: 40,
                      }}
                    />
                    <div className="flex flex-col ml-3">
                      <h6 className="text-sm text-gray-600 my-0">
                        L uigi Gonzales
                      </h6>
                      <p className="my-0 text-xs">5 days ago</p>
                    </div>
                  </div>
                  <p className="p-[0.4rem] rounded-md my-[0.6rem] mx-[0rem] bg-gray-200">
                    Epic, interface looks lit.
                  </p>
                  <div className="ml-3">
                    <i className="fa fa-thumbs-up text-sm text-gray-500 hover:cursor-pointer hover:text-gray-700"></i>{" "}
                    12
                  </div>
                </div>
                <div className="flex flex-col my-3">
                  <div className="flex justify-start content-center">
                    <Avatar
                      alt="complex"
                      src={user1}
                      sx={{
                        width: 40,
                        height: 40,
                      }}
                    />
                    <div className="flex flex-col ml-3">
                      <h6 className="text-sm text-gray-600 my-0">
                        L uigi Gonzales
                      </h6>
                      <p className="my-0 text-xs">5 days ago</p>
                    </div>
                  </div>
                  <p className="p-[0.4rem] rounded-md my-[0.6rem] mx-[0rem] bg-gray-200">
                    Epic, interface looks lit.
                  </p>
                  <div className="ml-3">
                    <i className="fa fa-thumbs-up text-sm text-gray-500 hover:cursor-pointer hover:text-gray-700"></i>{" "}
                    12
                  </div>
                </div>
                <div className="border-l-2 pl-6 ml-4 mt-4">
                  <div className="flex flex-col my-3">
                    <div className="flex justify-start content-center">
                      <Avatar
                        alt="complex"
                        src={user1}
                        sx={{
                          width: 40,
                          height: 40,
                        }}
                      />
                      <div className="flex flex-col ml-3">
                        <h6 className="text-sm text-gray-600 my-0">
                          L uigi Gonzales
                        </h6>
                        <p className="my-0 text-xs">5 days ago</p>
                      </div>
                    </div>
                    <p className="p-[0.4rem] rounded-md my-[0.6rem] mx-[0rem] bg-gray-200">
                      Epic, interface looks lit.
                    </p>
                    <div className="ml-3">
                      <i className="fa fa-thumbs-up text-sm text-gray-500 hover:cursor-pointer hover:text-gray-700"></i>{" "}
                      12
                    </div>
                  </div>
                  <div className="flex flex-col my-3">
                    <div className="flex justify-start content-center">
                      <Avatar
                        alt="complex"
                        src={user1}
                        sx={{
                          width: 40,
                          height: 40,
                        }}
                      />
                      <div className="flex flex-col ml-3">
                        <h6 className="text-sm text-gray-600 my-0">
                          L uigi Gonzales
                        </h6>
                        <p className="my-0 text-xs">5 days ago</p>
                      </div>
                    </div>
                    <p className="p-[0.4rem] rounded-md my-[0.6rem] mx-[0rem] bg-gray-200">
                      Epic, interface looks lit.
                    </p>
                    <div className="ml-3">
                      <i className="fa fa-thumbs-up text-sm text-gray-500 hover:cursor-pointer hover:text-gray-700"></i>{" "}
                      12
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
