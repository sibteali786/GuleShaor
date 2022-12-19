import moment from "moment";
import axios from "axios";
import {
  MENTOR_ADD_TIMESLOTS_FAIL,
  MENTOR_ADD_TIMESLOTS_REQUEST,
  MENTOR_ADD_TIMESLOTS_SUCCESS,
  MENTOR_DETAILS_FAIL,
  MENTOR_DETAILS_REQUEST,
  MENTOR_DETAILS_SUCCESS,
  MENTOR_LIST_FAIL,
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  STUDENTS_OF_MENTOR_FAIL,
  STUDENTS_OF_MENTOR_REQUEST,
  STUDENTS_OF_MENTOR_SUCCESS,
} from "../constants/mentorConstants";

export const listMentors =
  (keyword = "", pageNumber = "", optionValue = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: MENTOR_LIST_REQUEST });
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}api/mentors?keyword=${keyword}&pageNumber=${pageNumber}&category=${optionValue}`
      );
      dispatch({
        type: MENTOR_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: MENTOR_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listMentorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_DETAILS_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}api/mentors/${id}`
    );
    dispatch({
      type: MENTOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listStudentsOfMentor = (id) => async (dispatch) => {
  try {
    dispatch({ type: STUDENTS_OF_MENTOR_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}api/getAllStudents/${id}`
    );
    dispatch({
      type: STUDENTS_OF_MENTOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STUDENTS_OF_MENTOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addTimeslots = (type, mentorId, timeslots) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_ADD_TIMESLOTS_REQUEST });
    // const { data } = await axios.post(
    //   `${process.env.REACT_APP_API_URL}api/addTimeSlots/${mentorId}`,
    //   timeslots
    // );
    // saving user in the local storage so as to restore session / page when it comes again after some time
    if (type === "separate") {
      // const date = moment(timeslots.date).format("L");
      // const time = moment(timeslots.time).format("LT");
      // const dateAndTime = {
      //   date,
      //   time,
      // };
      console.log("From the addTime Slot Action", mentorId, timeslots);
    } else {
      console.log("From the addTime Slot Action", mentorId, timeslots);
    }
    // localStorage.setItem("timeSlots", JSON.stringify(data));
    // dispatch({
    //   type: MENTOR_ADD_TIMESLOTS_SUCCESS,
    //   payload: dateAndTime,
    // });
  } catch (error) {
    dispatch({
      type: MENTOR_ADD_TIMESLOTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
