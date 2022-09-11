import React from "react";
import { Card, Col, Form, FormGroup, InputGroup, Row } from "react-bootstrap";
import FormSteps from "../../components/FormSteps/FormSteps";
import FormContainer from "../../components/FromContainer/FormContainer";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import "./QualificationForm.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
const QualificationForm = () => {
  const [schoolName, setSchoolName] = React.useState("");
  const [mGrade, setMGrade] = React.useState("");
  const [hSchoolName, setHSchoolName] = React.useState("");
  const [universityName, setUniversityName] = React.useState("");
  const [hGrade, setHGrade] = React.useState("");
  const [gpa, setGpa] = React.useState(0);
  const [cgpa, setCgpa] = React.useState(0);
  const [degree, setDegree] = React.useState("");
  const [fieldOfInterest, setFieldOfInterest] = React.useState("");
  const [skills, setSkills] = React.useState("");
  // steps state
  const [step, setStep] = React.useState(false);
  const history = useNavigate();
  //Form validation
  const [validated, setValidated] = React.useState(false);

  // Form Submission
  const submitHandler = (e) => {
    // TODO: add submit handler
    const form = e.currentTarget;
    console.log(skills.split(","));
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (form.checkValidity() === true) {
      e.preventDefault();
      setStep(true);
    }
    if (step) {
      history("/profileSetup");
    }
    setValidated(true);
  };
  return (
    <FormContainer>
      <FormSteps step1 step2 step3 />
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
                      <div className="mb-1 form-text text-muted d-flex flex-column">
                        <h5>Schooling</h5>
                        <small className=" mt-0 pt-0">
                          *All the fields are optional, leave them empty if they
                          are not applicable for you
                        </small>
                      </div>
                      <Row>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>School Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="schoolName"
                              value={schoolName}
                              placeholder="Beaconhouse.."
                              onChange={(e) => setSchoolName(e.target.value)}
                            />
                          </FormGroup>
                        </Col>

                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Matric / O-Levels Grade</Form.Label>
                            <Form.Control
                              type="text"
                              name="mGrade"
                              value={mGrade}
                              placeholder="A+"
                              onChange={(e) => setMGrade(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <div className="mb-1 mt-3 form-text text-muted d-flex flex-column">
                        <h5>Fsc / I-Com / FA / A-Levels</h5>
                        <small className=" mt-0 pt-0">
                          *All the fields are optional, leave them empty if they
                          are not applicable for you
                        </small>
                      </div>
                      <Row>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>High School Name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Army Public School/ College"
                              name="hSchoolName"
                              value={hSchoolName}
                              onChange={(e) => setHSchoolName(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Grade</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="A-"
                              name="hGrade"
                              value={hGrade}
                              onChange={(e) => setHGrade(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <div className="mb-2 mt-3 form-text tex-muted d-flex flex-column">
                        <h5>Undergraduate Studies</h5>
                        <small>
                          *Some fields are optional, leave them empty if they
                          are not applicable for you
                        </small>
                      </div>
                      <Row>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>University Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Nust"
                              name="universityName"
                              value={universityName}
                              onChange={(e) =>
                                setUniversityName(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Degree</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Bachelor of Science"
                              name="linkedInUrl"
                              value={degree}
                              onChange={(e) => setDegree(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="mb-5">
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>GPA last semester</Form.Label>
                            <Form.Control
                              required
                              type="number"
                              placeholder="2.8"
                              step="0.1"
                              min="0"
                              max="4"
                              name="devToUrl"
                              value={gpa}
                              onChange={(e) => setGpa(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please enter a valid grade point average out of
                              4.0!
                            </Form.Control.Feedback>
                          </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                          <FormGroup>
                            <Form.Label>Cumulative GPA/ CGPA</Form.Label>
                            <Form.Control
                              required
                              type="number"
                              step="0.1"
                              min="0"
                              max="4"
                              placeholder="3.2"
                              name="cpga"
                              value={cgpa}
                              onChange={(e) => setCgpa(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please enter a valid grade point average out of
                              4.0!
                            </Form.Control.Feedback>
                          </FormGroup>
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

export default QualificationForm;
