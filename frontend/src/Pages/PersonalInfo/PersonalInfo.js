import React from "react";
import "./PersonalInfo.scss";
import { Row, Col, Form, FormGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Avatar, Badge, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RoundActionButton from "../../components/RoundActionButton/RoundActionButton";
import FormSteps from "../../components/FormSteps/FormSteps";
import FormContainer from "../../components/FromContainer/FormContainer";

const PersonalInfo = () => {
  const uploadHandler = () => {};
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
                    <Row className="d-flex flex-row align-items-center justify-content-end">
                      <Col
                        xs={12}
                        sm={6}
                        className="d-flex flex-column flex-sm-row align-items-center justify-content-start mb-3"
                      >
                        <Badge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          badgeContent={
                            <RoundActionButton
                              aria-label="upload picture"
                              size="medium"
                              styleCode={{
                                background: "#fff",
                                color: "#252C33",
                              }}
                              uploadHandler={uploadHandler}
                            >
                              <CameraAltIcon fontSize="medium" />
                            </RoundActionButton>
                          }
                        >
                          <Avatar
                            sx={{
                              width: 140,
                              height: 140,
                            }}
                          />
                        </Badge>
                        <div className="text-left text-sm-left mb-2 mb-sm-0 ms-2">
                          <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                            John Smith
                          </h4>
                          <p className="mb-0">@johnny.s</p>
                        </div>
                      </Col>
                      <Col xs={12} sm={6} className="text-end text-sm-right">
                        <small className=" text-muted fw-bold">
                          Joined 09 Dec 2017
                        </small>
                      </Col>
                    </Row>
                    <Form>
                      <Row>
                        <Col>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                  ype="text"
                                  name="name"
                                  placeholder="John Smith"
                                  value="John Smith"
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="username"
                                  placeholder="johnny.s"
                                  value="johnny.s"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="user@example.com"
                                ></Form.Control>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="mb-3">
                              <FormGroup>
                                <Form.Label>About</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows="5"
                                  placeholder="My Bio"
                                ></Form.Control>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className="mb-3">
                          <div className="mb-2">
                            <b>More Info</b>
                          </div>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Mobile No</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="+92-312...."
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>WhatsApp No</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="+92-312...."
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className="mb-3">
                          <div className="mb-2">
                            <b>Social Media Info</b>
                          </div>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.facebook/Ali786"
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.linekdin/Ali786"
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
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Medium</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.medium/Ali786"
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
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Dribble</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.dribble/Ali786"
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
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control
                                  type="url"
                                  placeholder="https://www.Instagram/Ali786"
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
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <div>
                        <div className="col d-flex justify-content-end">
                          <SubmitButton variant="outlined" type="submit">
                            Save Changes
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
