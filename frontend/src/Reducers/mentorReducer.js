import {
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

export const mentorListReducer = (state = { mentors: [] }, action) => {
  switch (action.type) {
    case MENTOR_LIST_REQUEST:
      return { loading: true, mentors: [] };
    case MENTOR_LIST_SUCCESS:
      return {
        loading: false,
        mentors: action.payload.mentors,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case MENTOR_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const mentorDetailsReducer = (state = { mentor: {} }, action) => {
  switch (action.type) {
    case MENTOR_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MENTOR_DETAILS_SUCCESS:
      return { loading: false, mentor: action.payload };
    case MENTOR_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const studentsOfMentorReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENTS_OF_MENTOR_REQUEST:
      return { loadingStudents: true, students: [] };
    case STUDENTS_OF_MENTOR_SUCCESS:
      return { loadingStudents: false, students: action.payload };
    case STUDENTS_OF_MENTOR_FAIL:
      return { loadingStudents: false, errorStudents: action.payload };
    default:
      return state;
  }
};
