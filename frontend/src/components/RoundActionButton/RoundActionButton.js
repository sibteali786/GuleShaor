import { IconButton } from "@mui/material";
import React from "react";
import "./RoundActionButton.scss";
const RoundActionButton = ({
  children,
  uploadHandler,
  ariaLabel,
  size,
  styleCode,
}) => {
  return (
    <div className="container-roundButton">
      <IconButton
        aria-label={ariaLabel}
        size={size}
        style={styleCode}
        onClick={uploadHandler}
        className="styles"
      >
        {children}
      </IconButton>
    </div>
  );
};

export default RoundActionButton;
