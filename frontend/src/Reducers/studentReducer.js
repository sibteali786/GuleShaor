import {
  GET_STUDENT_EVENTS_FAIL,
  GET_STUDENT_EVENTS_REQUEST,
  GET_STUDENT_EVENTS_SUCCESS,
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
} from "../constants/studentConstants";

export const studentListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true, students: [] };
    case STUDENT_LIST_SUCCESS:
      return {
        loading: false,
        students: action.payload.students,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const studentDetailsReducer = (state = { student: {} }, action) => {
  switch (action.type) {
    case STUDENT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case STUDENT_DETAILS_SUCCESS:
      return { loading: false, student: action.payload };
    case STUDENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getStudentEvents = (state = { events: [] }, action) => {
  switch (action.type) {
    case GET_STUDENT_EVENTS_REQUEST:
      return { loading: true };
    case GET_STUDENT_EVENTS_SUCCESS:
      return { loading: false, success: true, events: action.payload };
    case GET_STUDENT_EVENTS_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};
