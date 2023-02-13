import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const FormSteps = ({ step, stepsArray }) => {
  return (
    <Nav className="justify-content-center mb-4 mt-[4rem] text-md">
      {stepsArray.map((item, index) => (
        <Nav.Item key={index}>
          {step > index ? (
            <LinkContainer to={item.to}>
              <Nav.Link className="text-sm">{item.name}</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled className="text-sm">
              {item.name}
            </Nav.Link>
          )}
        </Nav.Item>
      ))}
    </Nav>
  );
};
export default FormSteps;
