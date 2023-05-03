import {
  ADD_AVAILABILITY_DATA,
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

export const mentorAddTimeslotsReducer = (state = { slots: [] }, action) => {
  switch (action.type) {
    case MENTOR_ADD_TIMESLOTS_REQUEST:
      return { loading: true };
    case MENTOR_ADD_TIMESLOTS_SUCCESS:
      return { loading: false, success: true, slots: action.payload };
    case MENTOR_ADD_TIMESLOTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mentorAddAppointmentReducer = (
  state = { appointment: {} },
  action
) => {
  switch (action.type) {
    case MENTOR_ADD_APPOINTMENT_REQUEST:
      return { loading: true };
    case MENTOR_ADD_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, appointments: action.payload };
    case MENTOR_ADD_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialAvailabilityState = {
  step1: {
    // initial state of step 1
  },
  step2: {
    // initial state of step 2
  },
  // ...
};

export default function mentorAddAvailabilityReducer(
  state = initialAvailabilityState,
  action
) {
  switch (action.type) {
    case UPDATE_AVAILABILITY_DATA_STEP_1:
      const updatedStep1 = { ...state.step1, ...action.payload };
      localStorage.setItem(
        "availabilityData",
        JSON.stringify({ ...state, step1: updatedStep1 })
      );
      return {
        ...state,
        step1: updatedStep1,
      };
    case UPDATE_AVAILABILITY_DATA_STEP_2:
      const updatedStep2 = { ...state.step2, ...action.payload };
      localStorage.setItem(
        "availabilityData",
        JSON.stringify({ ...state, step2: updatedStep2 })
      );
      return {
        ...state,
        step2: updatedStep2,
      };
    // ...
    default:
      return state;
  }
}

export const mentorAddScheudlesReducer = (state = { schedule: {} }, action) => {
  switch (action.type) {
    case SCHEDULE_ADD_REQUEST:
      return { loading: true };
    case SCHEDULE_ADD_SUCCESS:
      return { loading: false, success: true, schedule: action.payload };
    case SCHEDULE_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
