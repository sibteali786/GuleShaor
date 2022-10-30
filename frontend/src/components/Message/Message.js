import { Alert } from "@mui/material";
import React from "react";
import "./Message.scss";
const Message = ({ children, variant, severity }) => {
  return (
    <div className="containerMessage w-full self-center">
      <Alert variant={variant || "filled"} severity={severity || "error"}>
        {children}
      </Alert>
    </div>
  );
};

export default Message;
