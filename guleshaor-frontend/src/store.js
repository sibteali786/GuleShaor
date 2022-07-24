import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { mentorListReducer } from './Reducers/mentorReducer';

const reducer = combineReducers({
    mentorList:mentorListReducer
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