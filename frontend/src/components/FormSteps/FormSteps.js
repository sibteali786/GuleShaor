import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const FormSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4 mt-5">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/signup">
            <Nav.Link>Sign up</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign Up</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/personalinfo">
            <Nav.Link>Personal Info</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Personal Info</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/qulification">
            <Nav.Link>Qulification</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Qulification</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/profilesetup">
            <Nav.Link>Profile Setup</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Profile Setup</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};
export default FormSteps;
