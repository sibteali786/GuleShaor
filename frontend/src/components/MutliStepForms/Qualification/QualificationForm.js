import React, { useEffect } from "react";
import { Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import SubmitButton from "../../SubmitButton/SubmitButton";
import "./QualificationForm.scss";
import * as yup from "yup";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getUserDetails } from "../../../actions/userActions";
import SnakBar from "../../SnakBar/SnakBar";
const QualificationForm = ({
  nextStep,
  prevStep,
  UserDetails,
  setUserDetails,
}) => {
  const schema = yup.object().shape({
    universityName: yup
      .string()
      .required("University Name is required")
      .min(4, "There must be at least 4 characters")
      .max(50, "There must be at most 50 characters"),
    degree: yup
      .string()
      .required("Degree Name is required")
      .min(4, "There must be at least 4 characters")
      .max(50, "There must be at most 50 characters"),
    certificateTitle: yup.string().notRequired(),
    issuedBy: yup.string().notRequired(),
    achievementTitle: yup.string().notRequired(),
    awardedBy: yup.string().notRequired(),
  });
  const form = useForm({
    defaultValues: {
      schoolName: "",
      schoolGrade: "",
      highSchool: "",
      highSchoolGrade: "",
      universityName: "",
      gpa: 0.0,
      cgpa: 0.0,
      degree: "",
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

  const universityName = watch("universityName", "");
  const degree = watch("degree", "");
  const certificateTitle = watch("certificateTitle", "");
  const issuedBy = watch("issuedBy", "");
  const achievementTitle = watch("achievementTitle", "");
  const awardedBy = watch("awardedBy", "");
  // steps state
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
      about: {
        ...UserDetails.about,
        education: {
          university: data?.universityName,
          degree: data?.degree,
        },
        // TODO: convert in to an array from along with certifications
        achievements: [
          {
            title: data?.achievementTitle,
            awardedBy: data?.awardedBy,
          },
        ],
      },
      certifications: [
        {
          title: data?.certificateTitle,
          issuedBy: data?.issuedBy,
        },
      ],
    });
    nextStep();
  };
  useEffect(() => {
    if (!user?.name) {
      dispatch(getUserDetails("profile"));
    } else {
      if (
        UserDetails?.about?.education?.university &&
        UserDetails?.about?.education?.degree
      ) {
        setValue("universityName", UserDetails?.about?.education?.university);
        setValue("degree", UserDetails?.about?.education?.university?.degree);
      } else if (
        user?.about?.education?.university ||
        user?.about?.education?.university?.degree
      ) {
        setValue("universityName", user?.about?.education?.university?.name);
        setValue("degree", user?.about?.education?.university?.degree);
      }
    }
    if (Object.keys(errors).length !== 0) {
      handleClick();
    }
  }, [dispatch, user, setValue, UserDetails, errors]);
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
  return (
    <>
      <SnakBar
        open={open}
        handleClose={handleClose}
        typeOfAlert="error"
        message="Submission Error"
      />

      <Row className="py-1 px-0 back">
        <Col>
          <Row>
            <Col className="mb-3">
              <Card className="card-settings">
                <Card.Body>
                  <div className="e-profile">
                    <Form onSubmit={handleSubmit(submitHandler)}>
                      <div className="mb-2 mt-3 form-text d-flex flex-column">
                        <h5>Undergraduate Studies</h5>
                      </div>
                      <Row>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>University Name</Form.Label>
                            <Form.Control
                              {...register("universityName", {
                                required: true,
                              })}
                              type="text"
                              placeholder="Nust"
                              name="universityName"
                            />
                            <small className="form-text text-muted text-xs line leading-none">
                              For e.g : National University of Sciences and
                              Technology
                            </small>

                            {touchedFields.universityName &&
                              errors.universityName && (
                                <div className="my-2">
                                  <Alert
                                    severity="error"
                                    variant="outlined"
                                    className="py-0 border-0"
                                  >
                                    {errors.universityName.message}
                                  </Alert>
                                </div>
                              )}
                          </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Degree</Form.Label>
                            <Form.Control
                              {...register("degree", { required: true })}
                              type="text"
                              placeholder="Bachelor of Science"
                              name="degree"
                            />
                            <small className="form-text text-muted text-xs">
                              For e.g : Bachelor of Physics
                            </small>
                            {touchedFields.degree && errors.degree && (
                              <div className="my-2">
                                <Alert
                                  severity="error"
                                  variant="outlined"
                                  className="py-0 border-0"
                                >
                                  {errors.degree.message}
                                </Alert>
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <div className="mb-1 mt-2 form-text d-flex flex-column">
                        <h5>Certifications</h5>
                      </div>
                      <Row className="mb-5">
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                              {...register("certificateTitle")}
                              placeholder="Intro to Statistics"
                              name="certificateTitle"
                            />
                            {touchedFields.certificateTitle &&
                              errors.certificateTitle && (
                                <div className="my-2">
                                  <Alert
                                    severity="error"
                                    variant="outlined"
                                    className="py-0 border-0"
                                  >
                                    {errors.certificateTitle.message}
                                  </Alert>
                                </div>
                              )}
                          </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Issued By</Form.Label>
                            <Form.Control
                              {...register("issuedBy")}
                              placeholder="Coursera"
                              name="issuedBy"
                            />
                            {touchedFields.issuedBy && errors.issuedBy && (
                              <div className="my-2">
                                <Alert
                                  severity="error"
                                  variant="outlined"
                                  className="py-0 border-0"
                                >
                                  {errors.issuedBy.message}
                                </Alert>
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <div className="my-1 form-text d-flex flex-column">
                        <h5>Achievements</h5>
                      </div>
                      <Row className="mb-5">
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                              {...register("achievementTitle")}
                              placeholder="Best Speaker"
                              name="achievementTitle"
                            />
                            {touchedFields.achievementTitle &&
                              errors.achievementTitle && (
                                <div className="my-2">
                                  <Alert
                                    severity="error"
                                    variant="outlined"
                                    className="py-0 border-0"
                                  >
                                    {errors.achievementTitle.message}
                                  </Alert>
                                </div>
                              )}
                          </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Awarded By</Form.Label>
                            <Form.Control
                              {...register("awardedBy")}
                              placeholder="UOK"
                              name="awardedBy"
                            />
                            {touchedFields.awardedBy && errors.awardedBy && (
                              <div className="my-2">
                                <Alert
                                  severity="error"
                                  variant="outlined"
                                  className="py-0 border-0"
                                >
                                  {errors.awardedBy.message}
                                </Alert>
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <div>
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
                              setValue("certificateTitle", certificateTitle, {
                                shouldTouch: true,
                              });
                              setValue("issuedBy", issuedBy);
                              setValue("achievementTitle", achievementTitle);
                              setValue("awardedBy", awardedBy);
                              setValue("universityName", universityName, {
                                shouldTouch: true,
                              });
                              setValue("degree", degree, { shouldTouch: true });
                            }}
                          >
                            Submit
                          </SubmitButton>
                        </div>
                      </div>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default QualificationForm;
