import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  mentorDetailsReducer,
  mentorListReducer,
  studentsOfMentorReducer,
} from "./Reducers/mentorReducer";
import {
  studentDetailsReducer,
  studentListReducer,
} from "./Reducers/studentReducer";
import {
  updateUserDetailsReducer,
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./Reducers/userReducer";
import { imageUploadReducer } from "./Reducers/imageReducer";

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
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userUpdateDetails: { userUpdatedDetails: UserDetailsFromStorage },
  userDetails: { user: UserDetailsFromStorage },
  profileImage: { userProfileImage: profileImageFromStorage },
};
console.log(profileImageFromStorage);
const store = legacy_createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
