import { Alert } from "@mui/material";
import React from "react";
import "./Message.scss";
const Message = ({ children, variant }) => {
  return (
    <div className="containerMessage">
      <Alert variant={variant || "filled"} severity="error">
        {children}
      </Alert>
    </div>
  );
};

export default Message;
