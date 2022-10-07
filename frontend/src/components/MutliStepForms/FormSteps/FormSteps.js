import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const FormSteps = ({ step }) => {
  return (
    <Nav className="justify-content-center mb-4 mt-[4rem]">
      <Nav.Item>
        {step === 1 ? (
          <LinkContainer to="/signup">
            <Nav.Link>Sign up</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign Up</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step === 2 ? (
          <LinkContainer to="/personalinfo">
            <Nav.Link>Personal Info</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Personal Info</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step === 3 ? (
          <LinkContainer to="/qualification">
            <Nav.Link>Qualification</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Qualification</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step === 4 ? (
          <LinkContainer to="/profileSetup">
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
