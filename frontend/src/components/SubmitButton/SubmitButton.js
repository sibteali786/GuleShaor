import { Button } from "@mui/material";
import React from "react";
import "./SubmitButton.scss";
const SubmitButton = ({ variant, children, type, size, styleCode }) => {
  return (
    <span className="submitButton">
      <Button
        variant={variant}
        className={variant === "text" ? "" : "buttonRegister"}
        type={type || ""}
        size={size}
        style={styleCode}
      >
        {children}
      </Button>
    </span>
  );
};

export default SubmitButton;
