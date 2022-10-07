import React, { useEffect } from "react";
import { Card, Col, Form, FormGroup, Nav, Row } from "react-bootstrap";
import FormSteps from "../FormSteps/FormSteps";
import FormContainer from "../FromContainer/FormContainer";
import SubmitButton from "../../SubmitButton/SubmitButton";
import "./QualificationForm.scss";
import * as yup from "yup";
import { LinkContainer } from "react-router-bootstrap";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  getUserDetails,
  updateUserDetails,
} from "../../../actions/userActions";
const QualificationForm = () => {
  const schema = yup.object().shape({
    schoolName: yup
      .string()
      .required("School Name is required")
      .min(3, "There must be at least 3 characters")
      .max(50, "There must be at most 50 characters"),

    schoolGrade: yup
      .string()
      .required("Matric / O-Levels Grade is required")
      .min(1, "There must be at least 1 characters")
      .max(50, "There must be at most 50 characters"),
    highSchool: yup
      .string()
      .required("High School Name is required")
      .min(3, "There must be at least 3 characters")
      .max(50, "There must be at most 50 characters"),
    highSchoolGrade: yup
      .string()
      .required("Matric / O-Levels Grade is required")
      .min(1, "There must be at least 1 characters")
      .max(50, "There must be at most 50 characters"),
    gpa: yup
      .number()
      .required("GPA is required")
      .min(1, "There must be at least 1 characters")
      .max(4, "There must be at most 4 characters")
      .positive(),
    cgpa: yup
      .number()
      .required("CGPA is required")
      .min(1, "There must be at least 1 characters")
      .max(4, "There must be at most 4 characters")
      .positive(),

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

  const schoolName = watch("schoolName", "");
  const schoolGrade = watch("schoolGrade", "");
  const highSchool = watch("highSchool", "");
  const universityName = watch("universityName", "");
  const highSchoolGrade = watch("highSchoolGrade", "");
  const gpa = watch("gpa", 0.0);
  const cgpa = watch("cgpa", 0.0);
  const degree = watch("degree", "");
  // steps state
  const [step, setStep] = React.useState(false);
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
    console.log(data);
    const user = {
      mentorDetails: {
        userType: "mentor",
      },
      about: {
        education: {
          school: { name: data?.schoolName, grade: data?.schoolGrade },
          college: { name: data?.highSchool, grade: data?.highSchoolGrade },
          university: {
            name: data?.universityName,
            gpa: data?.gpa,
            cgpa: data?.cgpa,
            degree: data?.degree,
          },
        },
      },
    };
    try {
      dispatch(updateUserDetails(user));
      setStep(true);
    } catch (error) {
      console.error(error.message);
    }
    setStep(true);
  };
  useEffect(() => {
    if (!user?.name) {
      console.log("getting user details");
      dispatch(getUserDetails("profile"));
    } else {
      setValue("schoolName", user.school);
      setValue("schoolGrade", user.schoolGrade);
      setValue("highSchool", user.college);
      setValue("highSchoolGrade", user.collegeGrade);
      setValue("universityName", user.university);
      setValue("gpa", user.gpa);
      setValue("cgpa", user.cgpa);
      setValue("degree", user.degree);
    }
  }, [dispatch, user, setValue]);
  return (
    <Row className="py-1 px-0 back">
      <Col>
        <Row>
          <Col className="mb-3">
            <Card className="card-settings">
              <Card.Body>
                <div className="e-profile">
                  <Form onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-1 form-text text-muted d-flex flex-column">
                      <h5>Schooling</h5>
                    </div>
                    <Row>
                      <Col xs={12} sm={6}>
                        <FormGroup>
                          <Form.Label>School Name</Form.Label>
                          <Form.Control
                            {...register("schoolName", { required: true })}
                            type="text"
                            name="schoolName"
                            placeholder="Beaconhouse.."
                          />
                          <small className="form-text text-muted">
                            For e.g : Army Public School
                          </small>
                          {touchedFields.schoolName && errors.schoolName && (
                            <div className="my-2">
                              <Alert
                                severity="error"
                                variant="outlined"
                                className="py-0 border-0"
                              >
                                {errors.schoolName.message}
                              </Alert>
                            </div>
                          )}
                        </FormGroup>
                      </Col>

                      <Col xs={12} sm={6}>
                        <FormGroup>
                          <Form.Label>Matric / O-Levels Grade</Form.Label>
                          <Form.Control
                            {...register("schoolGrade", { required: true })}
                            type="text"
                            name="schoolGrade"
                            placeholder="A+"
                          />
                          <small className="form-text text-muted">
                            For e.g : A-one
                          </small>
                          {touchedFields.schoolGrade && errors.schoolGrade && (
                            <div className="my-2">
                              <Alert
                                severity="error"
                                variant="outlined"
                                className="py-0 border-0"
                              >
                                {errors.schoolGrade.message}
                              </Alert>
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="mb-1 mt-3 form-text text-muted d-flex flex-column">
                      <h5>Fsc / I-Com / FA / A-Levels</h5>
                    </div>
                    <Row>
                      <Col xs={12} sm={6}>
                        <FormGroup>
                          <Form.Label>High School Name</Form.Label>
                          <Form.Control
                            {...register("highSchool", { required: true })}
                            type="text"
                            placeholder="Army Public School/ College"
                            name="highSchool"
                          />
                          <small className="form-text text-muted">
                            For e.g : Government Degree College
                          </small>
                          {touchedFields.highSchool && errors.highSchool && (
                            <div className="my-2">
                              <Alert
                                severity="error"
                                variant="outlined"
                                className="py-0 border-0"
                              >
                                {errors.highSchool.message}
                              </Alert>
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col xs={12} sm={6}>
                        <FormGroup>
                          <Form.Label>Grade</Form.Label>
                          <Form.Control
                            {...register("highSchoolGrade", {
                              required: true,
                            })}
                            type="text"
                            placeholder="A-"
                            name="highSchoolGrade"
                          />
                          <small className="form-text text-muted">
                            For e.g : B
                          </small>
                          {touchedFields.highSchoolGrade &&
                            errors.highSchoolGrade && (
                              <div className="my-2">
                                <Alert
                                  severity="error"
                                  variant="outlined"
                                  className="py-0 border-0"
                                >
                                  {errors.highSchoolGrade.message}
                                </Alert>
                              </div>
                            )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="mb-2 mt-3 form-text tex-muted d-flex flex-column">
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
                          <small className="form-text text-muted">
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
                          <small className="form-text text-muted">
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
                    <Row className="mb-5">
                      <Col xs={12} sm={6}>
                        <FormGroup>
                          <Form.Label>GPA last semester</Form.Label>
                          <Form.Control
                            {...register("gpa", { required: true })}
                            type="number"
                            placeholder="2.8"
                            step="0.1"
                            min="0"
                            max="4"
                            name="gpa"
                          />
                          <small className="form-text text-muted">
                            For e.g : 3.6
                          </small>
                          {touchedFields.gpa && errors.gpa && (
                            <div className="my-2">
                              <Alert
                                severity="error"
                                variant="outlined"
                                className="py-0 border-0"
                              >
                                {errors.gpa.message}
                              </Alert>
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col xs={12} sm={6}>
                        <FormGroup>
                          <Form.Label>Cumulative GPA/ CGPA</Form.Label>
                          <Form.Control
                            {...register("cgpa", { required: true })}
                            type="number"
                            placeholder="2.8"
                            step="0.1"
                            min="0"
                            max="4"
                            name="cgpa"
                          />
                          <small className="form-text text-muted">
                            For e.g : 2.9
                          </small>
                          {touchedFields.cgpa && errors.cgpa && (
                            <div className="my-2">
                              <Alert
                                severity="error"
                                variant="outlined"
                                className="py-0 border-0"
                              >
                                {errors.cgpa.message}
                              </Alert>
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <div>
                      <div className="col d-flex justify-content-end mt-5">
                        <LinkContainer to="/personalInfo">
                          <Nav.Link className="py-1 px-3 bg-gradient bg-dark rounded-1">
                            Previous
                          </Nav.Link>
                        </LinkContainer>
                        <SubmitButton
                          variant="outlined"
                          type="submit"
                          onClick={() => {
                            setValue("schoolName", schoolName, {
                              shouldTouch: true,
                            });
                            setValue("schoolGrade", schoolGrade, {
                              shouldTouch: true,
                            });
                            setValue("highSchool", highSchool, {
                              shouldTouch: true,
                            });
                            setValue("highSchoolGrade", highSchoolGrade, {
                              shouldTouch: true,
                            });
                            setValue("universityName", universityName, {
                              shouldTouch: true,
                            });
                            setValue("degree", degree, { shouldTouch: true });
                            setValue("gpa", gpa, { shouldTouch: true });
                            setValue("cgpa", cgpa, { shouldTouch: true });
                          }}
                        >
                          Submit
                        </SubmitButton>
                        <LinkContainer to="/profileSetup">
                          <Nav.Link
                            className="py-1 px-3 bg-gradient bg-dark rounded-1"
                            disabled={!step ? true : false}
                          >
                            Next
                          </Nav.Link>
                        </LinkContainer>
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
  );
};

export default QualificationForm;
