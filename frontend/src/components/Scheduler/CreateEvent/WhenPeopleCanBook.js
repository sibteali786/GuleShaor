import React, { useEffect, useState } from "react";
import DateRange from "./DateRange";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { updateStep2 } from "../../../actions/mentorActions";
const WhenPeopleCanBook = ({ nextStep, prevStep }) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(updateStep2(data));
    }
  }, [data]);

  return (
    <div className="p-[2rem] bg-white flex flex-col justify-center border-2 border-gray-600 rounded-sm mb-[2rem] divide-y-2 space-y-4">
      <DateRange setData={setData} />
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => prevStep()}
      >
        Go Back
      </Button>
    </div>
  );
};

export default WhenPeopleCanBook;
