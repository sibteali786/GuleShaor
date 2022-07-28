import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { mentorDetailsReducer, mentorListReducer, studentsOfMentorReducer } from './Reducers/mentorReducer';
import { studentDetailsReducer, studentListReducer } from './Reducers/studentReducer';

const reducer = combineReducers({
    mentorList:mentorListReducer,
    mentorDetail:mentorDetailsReducer,
    studentList:studentListReducer,
    studentDetail:studentDetailsReducer,
    studentsOfMentors:studentsOfMentorReducer
});

const initialState = {};

const composeEnhancers = composeWithDevTools({
    name:"Redux",
    realtime:true,
    trace:true,
    tracelimit:25
})

const store = legacy_createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;