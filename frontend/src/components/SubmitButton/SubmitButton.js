import { Button } from "@mui/material";
import React from "react";
import "./SubmitButton.scss";
const SubmitButton = ({ variant, children, type }) => {
  return (
    <span className="submitButton">
      <Button variant={variant} className="buttonRegister" type={type || ""}>
        {children}
      </Button>
    </span>
  );
};

export default SubmitButton;
