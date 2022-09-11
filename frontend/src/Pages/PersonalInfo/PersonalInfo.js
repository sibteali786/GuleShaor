import React from "react";
import "./PersonalInfo.scss";
import { Row, Col, Form, FormGroup, InputGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Avatar, Badge } from "@mui/material";
import RoundActionButton from "../../components/RoundActionButton/RoundActionButton";
import FormSteps from "../../components/FormSteps/FormSteps";
import FormContainer from "../../components/FromContainer/FormContainer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
const PersonalInfo = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [whatsapp, setWhatsApp] = React.useState("");
  const [facebookUrl, setFacebookUrl] = React.useState("");
  const [linkedInUrl, setLinkedInUrl] = React.useState("");
  const [devToUrl, setDevToUrl] = React.useState("");
  const [behanceUrl, setBehanceUrl] = React.useState("");
  const [dribbleUrl, setDribbleUrl] = React.useState("");
  const [githubUrl, setGithubUrl] = React.useState("");
  const [twitterUrl, setTwitterUrl] = React.useState("");
  const [instagramUrl, setInstagramUrl] = React.useState("");
  const [mediumUrl, setMediumUrl] = React.useState("");

  // steps state
  const [step, setStep] = React.useState(false);
  const history = useNavigate();
  //Form validation
  const [validated, setValidated] = React.useState(false);
  const submitHandler = (e) => {
    // TODO: add submit handler
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (form.checkValidity() === true) {
      e.preventDefault();
      setStep(true);
    }
    if (step) {
      history("/qualification");
    }
    setValidated(true);
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
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={submitHandler}
                    >
                      <Row>
                        <Col>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  name="name"
                                  value={name}
                                  placeholder="John Smith"
                                  onChange={(e) => setName(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter your Full Name!
                                </Form.Control.Feedback>
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
                                    required
                                    type="text"
                                    name="username"
                                    value={userName}
                                    placeholder="johnny.s"
                                    onChange={(e) =>
                                      setUserName(e.target.value)
                                    }
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please enter a valid username!
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="user@example.com"
                                  name="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                  Please enter a valid email!
                                </Form.Control.Feedback>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="mb-3">
                              <FormGroup>
                                <Form.Label>About</Form.Label>
                                <Form.Control
                                  required
                                  as="textarea"
                                  rows="5"
                                  placeholder="My Bio"
                                  name="about"
                                  value={about}
                                  onChange={(e) => setAbout(e.target.value)}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                  Please enter something about yourself, your
                                  passion, goals and habits or whatever suits
                                  you...
                                </Form.Control.Feedback>
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
                                  required
                                  type="number"
                                  placeholder="+92-312...."
                                  name="mobile"
                                  value={mobile}
                                  onChange={(e) => setMobile(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter a valid mobile number!
                                </Form.Control.Feedback>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>WhatsApp No</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="+92-312...."
                                  name="whatsapp"
                                  value={whatsapp}
                                  onChange={(e) => setWhatsApp(e.target.value)}
                                />
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
                                  type="url"
                                  placeholder="https://www.facebook/Ali786"
                                  name="facebookUrl"
                                  value={facebookUrl}
                                  onChange={(e) =>
                                    setFacebookUrl(e.target.value)
                                  }
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.linekdin/Ali786"
                                  name="linkedInUrl"
                                  value={linkedInUrl}
                                  onChange={(e) =>
                                    setLinkedInUrl(e.target.value)
                                  }
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Dev To</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.devto/Ali786"
                                  name="devToUrl"
                                  value={devToUrl}
                                  onChange={(e) => setDevToUrl(e.target.value)}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Medium</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.medium/Ali786"
                                  name="mediumUrl"
                                  value={mediumUrl}
                                  onChange={(e) => setMediumUrl(e.target.value)}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Behance</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.behance/Ali786"
                                  name="behanceUrl"
                                  value={behanceUrl}
                                  onChange={(e) =>
                                    setBehanceUrl(e.target.value)
                                  }
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Dribble</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.dribble/Ali786"
                                  name="dribbleUrl"
                                  value={dribbleUrl}
                                  onChange={(e) =>
                                    setDribbleUrl(e.target.value)
                                  }
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Github</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.github/Ali786"
                                  name="githubUrl"
                                  value={githubUrl}
                                  onChange={(e) => setGithubUrl(e.target.value)}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.Instagram/Ali786"
                                  name="instagramUrl"
                                  value={instagramUrl}
                                  onChange={(e) =>
                                    setInstagramUrl(e.target.value)
                                  }
                                />
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
                                  type="url"
                                  placeholder="https://www.twitter/Ali786"
                                  name="twitterUrl"
                                  value={twitterUrl}
                                  onChange={(e) =>
                                    setTwitterUrl(e.target.value)
                                  }
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <div>
                        <div className="col d-flex justify-content-end">
                          <SubmitButton
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                          >
                            Previous
                          </SubmitButton>
                          <SubmitButton variant="outlined" type="submit">
                            Save
                          </SubmitButton>
                          <SubmitButton
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            disabled={!step ? true : false}
                          >
                            Next
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
    </FormContainer>
  );
};

export default PersonalInfo;
