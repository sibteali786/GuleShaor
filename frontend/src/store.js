import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import mentorAddAvailabilityReducer, {
  createEventReducer,
  getMentorSchedules,
  mentorAddScheudlesReducer,
  mentorAddTimeslotsReducer,
  mentorDetailsReducer,
  mentorListReducer,
  studentsOfMentorReducer,
} from "./Reducers/mentorReducer";
import {
  getStudentEvents,
  studentDetailsReducer,
  studentListReducer,
} from "./Reducers/studentReducer";
import {
  updateUserDetailsReducer,
  userDetailsReducer,
  userLoginReducer,
  userLoginWithGoogleReducer,
  userRegisterReducer,
} from "./Reducers/userReducer";
import { imageUploadReducer } from "./Reducers/imageReducer";

function lastAction(state = null, action) {
  return action;
}
const reducer = combineReducers({
  mentorList: mentorListReducer,
  mentorDetail: mentorDetailsReducer,
  studentList: studentListReducer,
  studentDetail: studentDetailsReducer,
  studentsOfMentors: studentsOfMentorReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateDetails: updateUserDetailsReducer,
  profileImage: imageUploadReducer,
  mentorSlots: mentorAddTimeslotsReducer,
  availabilityData: mentorAddAvailabilityReducer,
  mentorSchedules: mentorAddScheudlesReducer,
  mentorSchedulesGet: getMentorSchedules,
  mentorEvent: createEventReducer,
  studentEvents: getStudentEvents,
  userLoginGoogle: userLoginWithGoogleReducer,
  lastAction,
});

const composeEnhancers = composeWithDevTools({
  name: "Redux",
  realtime: true,
  trace: true,
  tracelimit: 25,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
// const userDetailsFromStorage = localStorage.getItem("userUpdatedDetails")
//   ? JSON.parse(localStorage.getItem("userUpdatedDetails"))
//   : null;
const UserDetailsFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const profileImageFromStorage = localStorage.getItem("profileImage")
  ? localStorage.getItem("profileImage")
  : null;
const mentorTimeSlotsFromStorage = localStorage.getItem("timeSlots")
  ? JSON.parse(localStorage.getItem("timeSlots"))
  : null;
const availabilityFromStorage = localStorage.getItem("availabilityData")
  ? JSON.parse(localStorage.getItem("availabilityData"))
  : {};
const scheduleFromStorage = localStorage.getItem("schedule")
  ? JSON.parse(localStorage.getItem("schedule"))
  : {};
const eventFromStorage = localStorage.getItem("event")
  ? JSON.parse(localStorage.getItem("event"))
  : {};
const eventsOfStudentsFromStorage = localStorage.getItem("eventsOfStudent")
  ? JSON.parse(localStorage.getItem("eventsOfStudent"))
  : {};
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userUpdateDetails: { userUpdatedDetails: UserDetailsFromStorage },
  userDetails: { user: UserDetailsFromStorage },
  profileImage: { userProfileImage: profileImageFromStorage },
  mentorSlots: mentorTimeSlotsFromStorage,
  availabilityData: availabilityFromStorage,
  mentorSchedules: scheduleFromStorage,
  mentorSchedulesGet: scheduleFromStorage,
  mentorEvent: eventFromStorage,
  studentEvents: eventsOfStudentsFromStorage,
};
const store = legacy_createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
