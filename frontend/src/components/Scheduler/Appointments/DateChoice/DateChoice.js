import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMentorSchedulesAction } from "../../../../actions/mentorActions";

const DateChoice = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMentorSchedulesAction(id));
  }, []);
  return <div>DateChoice</div>;
};

export default DateChoice;
