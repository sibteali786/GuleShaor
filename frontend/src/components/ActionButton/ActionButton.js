import React from "react";
import Button from "@mui/material/Button";
import "./ActionButton.scss";
const ActionButton = ({ variant }) => {
  return (
    <div className="actionButton">
      <Button variant={variant} style={{ justifyContent: "flex-start" }}>
        Learn More{" "}
        <svg
          data-bbox="21.1 72.3 158.1 49.8"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="40"
          viewBox="70 50 100 100"
          data-type="shape"
        >
          <g fill="#FFFFFF">
            <path
              d="M154.8 72.3l-2 2L174 94.9 21.1 95v2.7l153-.1-22.2 22.5 1.9 2 25.4-25.8-24.4-24z"
              fill="#FFFFFF"
            ></path>
          </g>
        </svg>
        {"   "}
      </Button>
    </div>
  );
};

export default ActionButton;
