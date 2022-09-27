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
import { userLoginReducer, userRegisterReducer } from "./Reducers/userReducer";

const reducer = combineReducers({
  mentorList: mentorListReducer,
  mentorDetail: mentorDetailsReducer,
  studentList: studentListReducer,
  studentDetail: studentDetailsReducer,
  studentsOfMentors: studentsOfMentorReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
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
console.log(localStorage);
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const store = legacy_createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
