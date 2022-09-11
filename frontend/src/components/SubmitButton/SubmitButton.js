import { Button } from "@mui/material";
import React from "react";
import "./SubmitButton.scss";
const SubmitButton = ({
  variant,
  children,
  type,
  size,
  styleCode,
  startIcon,
  endIcon,
  disabled,
}) => {
  return (
    <span className="submitButton mx-1">
      <Button
        variant={variant}
        className={variant === "text" ? "" : "buttonRegister"}
        type={type || ""}
        size={size}
        style={styleCode}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
      >
        {children}
      </Button>
    </span>
  );
};

export default SubmitButton;
