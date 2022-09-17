import React from "react";
import "./PersonalInfo.scss";
import { Row, Col, Form, FormGroup, InputGroup, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormSteps from "../../components/FormSteps/FormSteps";
import FormContainer from "../../components/FromContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { LinkContainer } from "react-router-bootstrap";
const PersonalInfo = () => {
  // yup validation schema
  const schema = yup.object().shape(
    {
      name: yup
        .string()
        .required("First Name is required")
        .min(3, "Must be less than 3 characters")
        .max(20, "Must be less than 20 characters"),
      email: yup.string().email().required("Email is required"),
      mobile: yup
        .string()
        .trim()
        .required("Required")
        .matches(
          /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/,
          "Format is not correct"
        ),
      userName: yup
        .string()
        .required("User Name is required")
        .max(20, "Must be less than 20 characters")
        .min(3, "Must be at least 3 characters"),
      about: yup
        .string()
        .required("About is required")
        .max(300, "Must be less than 300 characters")
        .min(5, "Must be at least 30 characters"),
      whatsApp: yup
        .string()
        .trim()
        .required("Required")
        .matches(
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/,
          "Format is not correct"
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
      facebook: yup
        .string()
        .trim()
        .notRequired()
        .nullable()
        .when("facebook", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(
              /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
              "Must be a valid facebook id url"
            ),
        }),
      instagram: yup
        .string()
        .trim()
        .notRequired()
        .when("instagram", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(
              /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,
              "Must be a valid Instagram username"
            ),
        }),
      medium: yup
        .string()
        .trim()
        .notRequired()
        .when("medium", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(
              /^@[A-Za-z0-9]+/,
              "Must be a valid Medium Username starting with @ "
            ),
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
      github: yup
        .string()
        .trim()
        .notRequired()
        .when("instagram", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(
              /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/,
              "Must be a valid GitHub Username"
            ),
        }),
      behance: yup
        .string()
        .trim()
        .notRequired()
        .when("behance", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(
              /^(http(s?):\/\/)?(www\.)?behance\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/,
              "Must be a valid Behance Username"
            ),
        }),
      dribble: yup
        .string()
        .trim()
        .notRequired()
        .when("dribble", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(
              /(?:http?:\/\/|https?:\/\/)?(?:www\.)?dribbble\.com\/(?:\/*)([\w\-\.]*)/,
              "Must be a valid Dribble Username"
            ),
        }),
      devto: yup
        .string()
        .trim()
        .notRequired()
        .when("devto", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(/^@[A-Za-z0-9]+/, "Must be a valid DevTo Username"),
        }),
    },
    [
      // Add Cyclic deps here because when require itself
      ["twitter", "twitter"],
      ["facebook", "facebook"],
      ["instagram", "instagram"],
      ["medium", "medium"],
      ["linkedIn", "linkedIn"],
      ["github", "github"],
      ["behance", "behance"],
      ["dribble", "dribble"],
      ["devto", "devto"],
    ]
  );

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      userName: "",
      mobile: "",
      whatsApp: "",
      about: "",
      twitter: "",
      facebook: "",
      instagram: "",
      medium: "",
      linkedIn: "",
      github: "",
      behance: "",
      dribble: "",
      devto: "",
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

  const name = watch("name", "");
  const about = watch("about", "");
  const email = watch("email", "");
  const mobile = watch("mobile", "");
  const userName = watch("userName", "");
  const whatsApp = watch("whatsApp", "");
  const twitter = watch("twitter", "");
  const facebook = watch("facebook", "");
  const instagram = watch("instagram", "");
  const medium = watch("medium", "");
  const linkedIn = watch("linkedIn", "");
  const github = watch("github", "");
  const behance = watch("behance", "");
  const dribble = watch("dribble", "");
  const devto = watch("devto", "");

  // steps state
  const [step, setStep] = React.useState(false);
  const submitHandler = (data) => {
    // TODO: add submit handler
    console.log(data);
    setStep(true);
  };
  return (
    <FormContainer>
      <FormSteps step1 step2 />
      <Row className="py-1 px-0 back">
        <Col>
          <Row>
            <Col className="mb-3">
              <Card className="card-settings">
                <Card.Body>
                  <div className="e-profile">
                    <Form onSubmit={handleSubmit(submitHandler)}>
                      <Row>
                        <Col>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                  {...register("name", { required: true })}
                                  name="name"
                                  placeholder="John Smith"
                                />
                                {touchedFields.name && errors.name && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.name.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                  <InputGroup.Text id="basic-addon1">
                                    @
                                  </InputGroup.Text>
                                  <Form.Control
                                    {...register("userName", {
                                      required: true,
                                    })}
                                    name="userName"
                                    placeholder="johnny.s"
                                  />
                                </InputGroup>
                                {touchedFields.userName && errors.userName && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.userName.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  {...register("email", { required: true })}
                                  name="email"
                                  placeholder="user@example.com"
                                ></Form.Control>
                                {touchedFields.email && errors.email && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.email.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="mb-3">
                              <FormGroup>
                                <Form.Label>About</Form.Label>
                                <Form.Control
                                  {...register("about", { required: true })}
                                  as="textarea"
                                  rows="5"
                                  placeholder="My Bio"
                                  name="about"
                                ></Form.Control>
                                {touchedFields.about && errors.about && (
                                  <div className="my-2">
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
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className="mb-3">
                          <div className="mb-2">
                            <b>Contact</b>
                          </div>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Mobile No</Form.Label>
                                <Form.Control
                                  {...register("mobile", { required: true })}
                                  placeholder="+92-312...."
                                  name="mobile"
                                />
                                {touchedFields.mobile && errors.mobile && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.mobile.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>WhatsApp No</Form.Label>
                                <Form.Control
                                  {...register("whatsApp", { required: true })}
                                  placeholder="+92-312...."
                                  name="whatsApp"
                                />
                                {touchedFields.whatsApp && errors.whatsApp && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.whatsApp.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className="mb-3">
                          <div className="mb-2 form-text tex-muted d-flex flex-column">
                            <b>Social Media</b>
                            <small>
                              *All the fields are optional, leave them empty if
                              they are not applicable for you
                            </small>
                          </div>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control
                                  {...register("facebook")}
                                  placeholder="https://www.facebook/Ali786"
                                  name="facebook"
                                />
                                {touchedFields.facebook && errors.facebook && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.facebook.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control
                                  {...register("linkedIn")}
                                  placeholder="https://www.linekdin/Ali786"
                                  name="linkedIn"
                                />
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
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Dev To</Form.Label>
                                <Form.Control
                                  {...register("devto")}
                                  placeholder="https://www.devto/ali786"
                                  name="devto"
                                />
                                {touchedFields.devto && errors.devto && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.devto.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Medium</Form.Label>
                                <Form.Control
                                  {...register("medium")}
                                  placeholder="https://www.medium/Ali786"
                                  name="medium"
                                />
                                {touchedFields.medium && errors.medium && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.medium.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Behance</Form.Label>
                                <Form.Control
                                  {...register("behance")}
                                  placeholder="https://www.behance/Ali786"
                                  name="behance"
                                />
                                {touchedFields.behance && errors.behance && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.behance.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Dribble</Form.Label>
                                <Form.Control
                                  {...register("dribble")}
                                  placeholder="https://www.dribble/Ali786"
                                  name="dribble"
                                />
                                {touchedFields.dribble && errors.dribble && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.dribble.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Github</Form.Label>
                                <Form.Control
                                  {...register("github")}
                                  placeholder="https://www.github/Ali786"
                                  name="github"
                                />
                                {touchedFields.github && errors.github && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.github.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control
                                  {...register("instagram")}
                                  placeholder="https://www.Instagram/Ali786"
                                  name="instagram"
                                />
                                {touchedFields.instagram && errors.instagram && (
                                  <div className="my-2">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.instagram.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={6}>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control
                                  {...register("twitter")}
                                  placeholder="https://www.twitter/Ali786"
                                  name="twitter"
                                />
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
                        </Col>
                      </Row>
                      <div className="col d-flex justify-content-end">
                        <LinkContainer to="/signup">
                          <Nav.Link className="py-1 px-3 bg-gradient bg-dark rounded-1">
                            Previous
                          </Nav.Link>
                        </LinkContainer>
                        <SubmitButton
                          variant="outlined"
                          type="submit"
                          onClick={() => {
                            setValue("name", name, { shouldTouch: true });
                            setValue("about", about, {
                              shouldTouch: true,
                            });
                            setValue("mobile", mobile, { shouldTouch: true });
                            setValue("whatsApp", whatsApp, {
                              shouldTouch: true,
                            });
                            setValue("twitter", twitter, {
                              shouldTouch: true,
                            });
                            setValue("facebook", facebook, {
                              shouldTouch: true,
                            });
                            setValue("instagram", instagram, {
                              shouldTouch: true,
                            });
                            setValue("linkedIn", linkedIn, {
                              shouldTouch: true,
                            });
                            setValue("devto", devto, {
                              shouldTouch: true,
                            });
                            setValue("dribble", dribble, {
                              shouldTouch: true,
                            });
                            setValue("behance", behance, {
                              shouldTouch: true,
                            });
                            setValue("github", github, {
                              shouldTouch: true,
                            });
                          }}
                        >
                          Submit
                        </SubmitButton>
                        <LinkContainer to="/qualification">
                          <Nav.Link
                            className="py-1 px-3 bg-gradient bg-dark rounded-1"
                            disabled={!step ? true : false}
                          >
                            Next
                          </Nav.Link>
                        </LinkContainer>
                      </div>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default PersonalInfo;
