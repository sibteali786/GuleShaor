import React, { useEffect } from "react";
import { Col, Row, FormGroup, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LinkContainer } from "react-router-bootstrap";
import { Alert } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import "./ProfileSetup.scss";
import SubmitButton from "../../SubmitButton/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateUserDetails,
} from "../../../actions/userActions";
import SnakBar from "../../SnakBar/SnakBar";

const ProfileSetup = ({ prevStep, nextStep, UserDetails, setUserDetails }) => {
  const schema = yup.object().shape(
    {
      category: yup.string().optional(),
      technical: yup.string().optional(),
      about: yup
        .string()
        .required("About is required")
        .min(30, "Must be at least 30 characters"),
      achievement: yup
        .string()
        .optional()
        .min(30, "Must be at least 30 characters"),
      portfolioLink: yup
        .string()
        .trim()
        .test(
          "pattern",
          "Must be a valid website address",
          (website) =>
            !website ||
            /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
              "https://" + website
            )
        ),
      twitter: yup
        .string()
        .trim()
        .notRequired()
        .when("twitter", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(/^([^\/\s?#]+)$/, "Must be a valid twitter handle"),
        }),
      linkedIn: yup
        .string()
        .trim()
        .notRequired()
        .when("linkedIn", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(
              /([a-zA-Z0-9À-ž_.-]+)/,
              "Must be a valid LinkedIn Username"
            ),
        }),
    },
    [
      // Add Cyclic deps here because when require itself
      ["twitter", "twitter"],
      ["linkedIn", "linkedIn"],
    ]
  );
  const form = useForm({
    defaultValues: {
      technical: "",
      category: "",
      portfolioLink: "",
      about: "",
      achievement: "",
      twitter: "",
      linkedIn: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { touchedFields, errors },
    watch,
  } = form;

  const technical = watch("technical", "");
  const category = watch("category", "");
  const portfolioLink = watch("portfolioLink", "");
  const about = watch("about", "");
  const achievement = watch("achievement", "");
  const twitter = watch("twitter", "");
  const linkedIn = watch("linkedIn", "");
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const {
    loading: loadingUserDetails,
    error: errorUserDetails,
    user,
  } = userDetails;
  const { type } = useSelector((state) => state.lastAction);
  const userType = user?.userType;

  // Form Submission
  const submitHandler = (data) => {
    const twitter = "https://twitter.com/" + data?.twitter;
    const linkedIn = "https://www.linekdin/" + data?.linkedIn;
    const portfolioLink = "https://" + data?.portfolioLink;

    // TODO: add submit handler
    if (userType === "mentor") {
      setUserDetails({
        ...UserDetails,
        userDetails: {
          ...UserDetails.userDetails,
          technical: data?.technical.split(","),
          category: data?.category,
          portfolioLink,
          userType: user?.userType,
        },
        about: {
          ...UserDetails.about,
          details: data?.about,
          randomAchievement: data?.achievement,
          socialMedia: {
            twitter,
            linkedIn,
          },
        },
      });
    } else if (userType === "student") {
      setUserDetails({
        ...UserDetails,
        userDetails: {
          ...UserDetails.userDetails,
          portfolioLink,
        },
        about: {
          ...UserDetails.about,
          randomAchievement: data?.achievement,
          socialMedia: {
            twitter,
            linkedIn,
          },
        },
      });
    }
    try {
      dispatch(updateUserDetails(UserDetails));
      if (type === "UPDATE_USER_DETAILS_SUCCESS") {
        nextStep();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    if (
      UserDetails?.userDetails?.technical?.length > 0 &&
      UserDetails?.userDetails?.interpersonal?.length > 0 &&
      UserDetails?.userDetails?.portfolioLink?.length > 0
    ) {
      setValue("technical", UserDetails?.userDetails?.technical);
      setValue("category", UserDetails?.userDetails?.catgeory);
      setValue("portfolioLink", UserDetails?.userDetails?.portfolioLink);
      setValue("about", UserDetails?.about?.details);
      setValue("randomAchievement", UserDetails?.about?.randomAchievement);
      setValue("twitter", UserDetails?.about?.socialMedia?.twitter);
      setValue("linkedIn", UserDetails?.about?.socialMedia?.linkedin);
    } else if (
      user?.mentorDetails?.technical?.length > 0 ||
      user?.mentorDetails?.interpersonal?.length > 0 ||
      user?.mentorDetails?.portfolioLink?.length > 0
    ) {
      setValue("technical", user?.mentorDetails?.technical);
      setValue("category", user?.mentorDetails?.category);
      setValue("portfolioLink", user?.mentorDetails?.portfolioLink);
      setValue("about", user?.mentorDetails?.about?.details);
      setValue(
        "randomAchievement",
        user?.mentorDetails?.about?.randomAchievement
      );
      setValue("twitter", user?.mentorDetails?.about?.socialMedia?.twitter);
      setValue("linkedIn", user?.mentorDetails?.about?.socialMedia?.linkedin);
    }
    if (Object.keys(errors).length !== 0) {
      handleClick();
    }
  }, [UserDetails, user, dispatch, setValue, errors]);

  return (
    <>
      <SnakBar
        open={open}
        handleClose={handleClose}
        typeOfAlert="error"
        message="Submission Error"
      />
      <Form onSubmit={handleSubmit(submitHandler)} className="back">
        <Row>
          <div className="mb-1 form-text text-muted d-flex flex-column">
            <h5 className="capitalize">
              {userType === "mentor"
                ? "Tell us about yourself as a Mentor"
                : "Tell us about you"}
            </h5>
            <small className=" mt-0 pt-0 text-xs text-black">
              *Some of the fields are optional, leave them empty if they are not
              applicable for you
            </small>
          </div>
          {userType === "mentor" ? (
            <Row>
              <Col xs={12} sm={6} className="mb-3">
                <FormGroup>
                  {
                    // TODO: Add specific component for redenring skills inpout using laracast skills api
                  }
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    {...register("category")}
                    type="text"
                    name="category"
                    placeholder="Computer Science"
                  />
                  <small className="form-text text-muted text-xs">
                    We use the category label to put you in a small set of
                    pre-defined buckets.
                  </small>
                </FormGroup>
                {touchedFields.category && errors.category && (
                  <div className="my-2">
                    <Alert
                      severity="error"
                      variant="outlined"
                      className="py-0 border-0"
                    >
                      {errors.category.message}
                    </Alert>
                  </div>
                )}
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <FormGroup>
                  {
                    // TODO: Add specific component for redenring skills inpout using laracast skills api
                  }
                  <Form.Label>Skills</Form.Label>
                  <Form.Control
                    {...register("technical")}
                    type="text"
                    name="technical"
                    placeholder="Management, Leadership..."
                  />
                  <small className="form-text text-muted">
                    Note: Leadership, Team Management, Java, DevOps etc.
                  </small>
                </FormGroup>
              </Col>
            </Row>
          ) : null}
        </Row>
        <Row>
          <Col className="mb-3">
            <FormGroup>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                {...register("about", { required: true })}
                as="textarea"
                rows="5"
                placeholder="Tell us (and your mentees) a little bit about yourself. Talk about yourself in the first person, as if you'd directly talk to a mentee. This will be public"
                name="about"
              ></Form.Control>
              {touchedFields.about && errors.about && (
                <div className="">
                  <Alert
                    severity="error"
                    variant="outlined"
                    className="py-0 border-0"
                  >
                    {errors.about.message}
                  </Alert>
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <FormGroup>
              <small>
                What in your opnion has been your greatest achievement so far{" "}
                {"Will not be publicly visible"}
              </small>
              <Form.Control
                {...register("achievement", { required: true })}
                as="textarea"
                rows="5"
                placeholder="Tell us (and your mentees) a little bit about yourself. Talk about yourself in the first person, as if you'd directly talk to a mentee. This will be public"
                name="achievement"
              ></Form.Control>
              {touchedFields.achievement && errors.achievement && (
                <div className="">
                  <Alert
                    severity="error"
                    variant="outlined"
                    className="py-0 border-0"
                  >
                    {errors.achievement.message}
                  </Alert>
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <div className="mb-1 form-text text-muted d-flex flex-column">
            <h5>Personal Branding</h5>
            <small className="mt-0 pt-0">
              *All the fields are optional, leave them empty if they are not
              applicable for you
            </small>
          </div>
          <Col xs={12} sm={6} className="mb-3">
            <FormGroup>
              {
                // TODO: Add specific component for redenring skills inpout using laracast skills api
              }
              <Form.Label>Personal Website</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">https://</InputGroup.Text>
                <Form.Control
                  {...register("portfolioLink")}
                  type="text"
                  name="portfolioLink"
                />
              </InputGroup>
              <small className="form-text text-muted">
                For e.g : www.adrian.com
              </small>
              {touchedFields.portfolioLink && errors.portfolioLink && (
                <div className="my-2">
                  <Alert
                    severity="error"
                    variant="outlined"
                    className="py-0 border-0"
                  >
                    {errors.portfolioLink.message}
                  </Alert>
                </div>
              )}
            </FormGroup>
          </Col>

          <Col xs={12} sm={6} className="mb-3">
            <FormGroup>
              {
                // TODO: Add specific component for redenring skills inpout using laracast skills api
              }
              <Form.Label>LinkedIn Id</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  https://www.linekdin/
                </InputGroup.Text>
                <Form.Control
                  {...register("linkedIn")}
                  type="text"
                  name="linkedIn"
                />
              </InputGroup>
              <small className="form-text text-muted">For e.g : Ali786</small>
              {touchedFields.linkedIn && errors.linkedIn && (
                <div className="my-2">
                  <Alert
                    severity="error"
                    variant="outlined"
                    className="py-0 border-0"
                  >
                    {errors.linkedIn.message}
                  </Alert>
                </div>
              )}
            </FormGroup>
          </Col>
          <Col xs={12} sm={6} className="mb-3">
            <FormGroup>
              {
                // TODO: Add specific component for redenring skills inpout using laracast skills api
              }
              <Form.Label>Twitter Handle</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  https://twitter.com/
                </InputGroup.Text>
                <Form.Control
                  {...register("twitter")}
                  type="text"
                  name="twitter"
                />
              </InputGroup>
              <small className="form-text text-muted">For e.g : Ali786</small>
              {touchedFields.twitter && errors.twitter && (
                <div className="my-2">
                  <Alert
                    severity="error"
                    variant="outlined"
                    className="py-0 border-0"
                  >
                    {errors.twitter.message}
                  </Alert>
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <div className="col d-flex justify-content-end my-5">
          <button
            className="py-1 px-3 hover:bg-white hover:text-black hover:border-2 hover:border-black bg-[#252C33] border-2 border-white text-primaryColor rounded-1 transition-all hover:scale-105 ease-in-out delay-80 "
            onClick={() => prevStep()}
          >
            Previous Step
          </button>
          <SubmitButton
            variant="outlined"
            type="submit"
            onClick={() => {
              setValue("category", category, {
                shouldTouch: true,
              });
              setValue("technical", technical, {
                shouldTouch: true,
              });
              setValue("portfolioLink", portfolioLink);
              setValue("about", about, {
                shouldTouch: true,
              });
              setValue("achievement", achievement);
              setValue("twitter", twitter);
              setValue("linkedIn", linkedIn);
            }}
          >
            Submit
          </SubmitButton>
        </div>
      </Form>
    </>
  );
};

export default ProfileSetup;
