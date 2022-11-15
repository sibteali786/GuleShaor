import React, { useEffect } from "react";
import { Col, Row, FormGroup, Form, Nav } from "react-bootstrap";
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
  const schema = yup.object().shape({
    technical: yup.string().optional().min(3).max(100),
    interpersonal: yup.string().optional().min(3).max(100),
    portfolioLink: yup
      .string()
      .trim()
      .test(
        "pattern",
        "Must be a valid website address",
        (website) =>
          !website ||
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
            website
          )
      ),
    videoLink: yup
      .string()
      .trim()
      .test(
        "pattern",
        "Must be a valid youtube link",
        (website) =>
          !website ||
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
            website
          )
      ),
  });
  const form = useForm({
    defaultValues: {
      technical: "",
      interpersonal: "",
      portfolioLink: "",
      videoLink: "",
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
  const interpersonal = watch("interpersonal", "");
  const portfolioLink = watch("portfolioLink", "");
  const videoLink = watch("videoLink", "");
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const {
    loading: loadingUserDetails,
    error: errorUserDetails,
    user,
  } = userDetails;
  // Form Submission
  const submitHandler = (data) => {
    // TODO: add submit handler
    setUserDetails({
      ...UserDetails,
      userDetails: {
        ...UserDetails.userDetails,
        technical: data?.technical.split(","),
        interpersonal: data?.interpersonal.split(","),
        portfolioLink: data?.portfolioLink,
      },
      introVideo: {
        ...UserDetails.userDetails.introVideo,
        video: data?.videoLink,
      },
    });
    if (
      UserDetails?.userDetails?.technical?.length > 0 &&
      UserDetails?.userDetails?.interpersonal?.length > 0
    ) {
      try {
        dispatch(updateUserDetails(UserDetails));
        nextStep();
      } catch (error) {
        console.log(error.message);
      }
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
      UserDetails?.userDetails?.portfolioLink?.length > 0 &&
      UserDetails?.userDetails?.introVideo?.video?.length > 0
    ) {
      setValue("technical", UserDetails?.userDetails?.technical);
      setValue("interpersonal", UserDetails?.userDetails?.interpersonal);
      setValue("portfolioLink", UserDetails?.userDetails?.portfolioLink);
      setValue("videoLink", UserDetails?.userDetails?.introVideo?.video);
    } else if (
      user?.mentorDetails?.technical?.length > 0 ||
      user?.mentorDetails?.interpersonal?.length > 0 ||
      user?.mentorDetails?.portfolioLink?.length > 0 ||
      user?.mentorDetails?.introVideo?.video?.length > 0
    ) {
      setValue("technical", user?.mentorDetails?.technical);
      setValue("interpersonal", user?.mentorDetails?.interpersonal);
      setValue("portfolioLink", user?.mentorDetails?.portfolioLink);
      setValue("videoLink", user?.mentorDetails?.introVideo?.video);
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
      <Form
        onSubmit={handleSubmit(submitHandler)}
        style={{ height: "100vh" }}
        className="back"
      >
        <Row>
          <div className="mb-1 form-text text-muted d-flex flex-column">
            <h5>Skills</h5>
            <small className=" mt-0 pt-0">
              *All the fields are optional, leave them empty if they are not
              applicable for you
            </small>
          </div>
          <Col xs={12} sm={6} className="mb-3">
            <FormGroup>
              {
                // TODO: Add specific component for redenring skills inpout using laracast skills api
              }
              <Form.Label>Technical</Form.Label>
              <Form.Control
                {...register("technical")}
                type="text"
                name="technical"
                placeholder="Python, Flask..."
              />
              <small className="form-text text-muted">
                Note: Python, Flask, Node, Express, MongoDB, MySQL etc.
              </small>
            </FormGroup>
            {touchedFields.technical && errors.technical && (
              <div className="my-2">
                <Alert
                  severity="error"
                  variant="outlined"
                  className="py-0 border-0"
                >
                  {errors.technical.message}
                </Alert>
              </div>
            )}
          </Col>

          <Col xs={12} sm={6} className="mb-3">
            <FormGroup>
              {
                // TODO: Add specific component for redenring skills inpout using laracast skills api
              }
              <Form.Label>Interperorsonal Skills</Form.Label>
              <Form.Control
                {...register("interpersonal")}
                type="text"
                name="interpersonal"
                placeholder="Management, Leadership..."
              />
              <small className="form-text text-muted">
                Note: Leadership, Team Management, Communication, etc.
              </small>
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
              <Form.Label>Portfolio</Form.Label>
              <Form.Control
                {...register("portfolioLink")}
                type="text"
                name="portfolioLink"
              />
              <small className="form-text text-muted">
                For e.g : https://www.adrian.com
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
              <Form.Label>Video Link</Form.Label>
              <Form.Control
                {...register("videoLink")}
                type="text"
                name="videoLink"
              />
              <small className="form-text text-muted">
                For e.g : https://www.youtube.com/watch?v=1
              </small>
              {touchedFields.videoLink && errors.videoLink && (
                <div className="my-2">
                  <Alert
                    severity="error"
                    variant="outlined"
                    className="py-0 border-0"
                  >
                    {errors.videoLink.message}
                  </Alert>
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <div className="col d-flex justify-content-end mt-5">
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
              setValue("technical", technical, {
                shouldTouch: true,
              });
              setValue("interpersonal", interpersonal, {
                shouldTouch: true,
              });
              setValue("portfolioLink", portfolioLink, {
                shouldTouch: true,
              });
              setValue("videoLink", videoLink, {
                shouldTouch: true,
              });
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
