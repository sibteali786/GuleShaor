import React from "react";
import "./Setting.scss";
import { Container, Row, Col, Button, Form, FormGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Avatar, Badge, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RoundActionButton from "../../components/RoundActionButton/RoundActionButton";

const Settings = () => {
  const uploadHandler = () => {};
  return (
    <Container fluid className="containerSettings">
      <Row className="py-5 px-0">
        <Col>
          <Row>
            <Col className="mb-3">
              <Card className="card-settings">
                <Card.Body>
                  <div className="e-profile">
                    <Row>
                      <Col xs={12} sm={2} className="mb-3">
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
                      </Col>
                      <Col
                        xs={12}
                        sm={10}
                        className="d-flex flex-column flex-sm-row justify-content-between mb-3"
                      >
                        <div className="text-left text-sm-left mb-2 mb-sm-0">
                          <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                            John Smith
                          </h4>
                          <p className="mb-0">@johnny.s</p>
                          <div className="mt-4">
                            <SubmitButton variant="outlined">
                              <i className="fa fa-fw fa-camera"></i>
                              <span className="ps-2">Change Photo</span>
                            </SubmitButton>
                          </div>
                        </div>
                        <div className="text-center text-sm-right">
                          <div className="text-muted fw-bold">
                            <small>Joined 09 Dec 2017</small>
                          </div>
                        </div>
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
                        <Col xs={12} sm={6} className="mb-3">
                          <div className="mb-2">
                            <b>Change Password</b>
                          </div>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="••••••"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="••••••"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Form.Label>
                                  Confirm{" "}
                                  <span className="d-none d-xl-inline">
                                    Password
                                  </span>
                                </Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="••••••"
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
    </Container>
  );
};

export default Settings;
