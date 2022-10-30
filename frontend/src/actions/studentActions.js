import axios from "axios";
import {
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
} from "../constants/studentConstants";

export const listStudents =
  (keyword = "", pageNumber = "", optionValue = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: STUDENT_LIST_REQUEST });
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}api/students?keyword=${keyword}&pageNumber=${pageNumber}&category=${optionValue}`
      );
      dispatch({
        type: STUDENT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: STUDENT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listStudentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}api/students/${id}`
    );
    dispatch({
      type: STUDENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STUDENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
