import moment from "moment";
import axios from "axios";
import {
  GET_MENTOR_SCHEDULES_FAIL,
  GET_MENTOR_SCHEDULES_REQUEST,
  GET_MENTOR_SCHEDULES_SUCCESS,
  MENTOR_ADD_APPOINTMENT_FAIL,
  MENTOR_ADD_APPOINTMENT_REQUEST,
  MENTOR_ADD_APPOINTMENT_SUCCESS,
  MENTOR_ADD_TIMESLOTS_FAIL,
  MENTOR_ADD_TIMESLOTS_REQUEST,
  MENTOR_ADD_TIMESLOTS_SUCCESS,
  MENTOR_DETAILS_FAIL,
  MENTOR_DETAILS_REQUEST,
  MENTOR_DETAILS_SUCCESS,
  MENTOR_LIST_FAIL,
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  SCHEDULE_ADD_FAIL,
  SCHEDULE_ADD_REQUEST,
  SCHEDULE_ADD_SUCCESS,
  STUDENTS_OF_MENTOR_FAIL,
  STUDENTS_OF_MENTOR_REQUEST,
  STUDENTS_OF_MENTOR_SUCCESS,
  UPDATE_AVAILABILITY_DATA_STEP_1,
  UPDATE_AVAILABILITY_DATA_STEP_2,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
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

export const addTimeslots = (type, timeSlots) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_ADD_TIMESLOTS_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}api/mentors/addtimeslots`,
      { timeSlots: timeSlots },
      config
    );
    // saving user in the local storage so as to restore session / page when it comes again after some time
    localStorage.setItem("timeSlots", JSON.stringify(data));
    dispatch({
      type: MENTOR_ADD_TIMESLOTS_SUCCESS,
      payload: data,
    });
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

export const addAppointmentAction = (appointment) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_ADD_APPOINTMENT_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}api/mentors/addtimeslots`,
      { appointments: appointment },
      config
    );
    // saving user in the local storage so as to restore session / page when it comes again after some time
    localStorage.setItem("timeSlots", JSON.stringify(data));
    dispatch({
      type: MENTOR_ADD_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_ADD_APPOINTMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export function updateStep1(data) {
  return {
    type: UPDATE_AVAILABILITY_DATA_STEP_1,
    payload: data,
  };
}

export function updateStep2(data) {
  return {
    type: UPDATE_AVAILABILITY_DATA_STEP_2,
    payload: data,
  };
}

export const schedulerAddAction = (availabilityData) => async (dispatch) => {
  try {
    dispatch({ type: SCHEDULE_ADD_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let outputObject = {};
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    if (availabilityData?.step2?.availability === "day") {
      try {
        outputObject = {
          day: availabilityData?.step2?.date,
          dayStart: availabilityData?.step2?.dayStart,
          dayEnd: availabilityData?.step2?.dayEnd,
          eventDuration: availabilityData.step1.duration,
          userDetails: {
            userType: userInfo?.userType,
          },
        };
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const { startDate, endDate } = availabilityData.step2;
        const start = new Date(startDate);
        const end = new Date(endDate);
        const outputArr = [];
        for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
          const day = d.toISOString();
          const obj = {
            day: moment(day).toISOString(true),
            dayStart: availabilityData?.step2?.dayStart,
            dayEnd: availabilityData?.step2?.dayEnd,
            eventDuration: availabilityData.step1.duration,
          };
          outputArr.push(obj);
        }
        outputObject = {
          data: outputArr,
          userDetails: {
            userType: userInfo?.userType,
          },
        };
      } catch (err) {
        console.log(err);
      }
    }
    console.log(outputObject);
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}api/schedule/create`,
      outputObject,
      config
    );
    // saving user in the local storage so as to restore session / page when it comes again after some time
    localStorage.setItem("schedule", JSON.stringify(data));
    dispatch({
      type: SCHEDULE_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SCHEDULE_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMentorSchedulesAction = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_MENTOR_SCHEDULES_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}api/schedule/${userId}`,
      config
    );
    // saving user in the local storage so as to restore session / page when it comes again after some time
    localStorage.setItem("schedules", JSON.stringify(data));
    dispatch({
      type: GET_MENTOR_SCHEDULES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MENTOR_SCHEDULES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createEventAction = (eventData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_EVENT_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}api/event/create`,
      eventData,
      config
    );
    // saving user in the local storage so as to restore session / page when it comes again after some time
    localStorage.setItem("event", JSON.stringify(data));
    dispatch({
      type: CREATE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_EVENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
