import React from "react";
import { TextField } from "@mui/material";
import DateRange from "./DateRange";

const WhenPeopleCanBook = () => {
  const onSubmit = (data) => {
    console.log(data);
    // Call API to update Calendly event type with form data
  };

  return (
    <>
      <DateRange />
    </>
  );
};

export default WhenPeopleCanBook;
