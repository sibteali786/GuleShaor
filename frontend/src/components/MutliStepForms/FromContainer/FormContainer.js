import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const FormContainer = ({ children }) => {
  return (
    <Container className="px-[2rem]">
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
