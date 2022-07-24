import { MENTOR_LIST_FAIL, MENTOR_LIST_REQUEST, MENTOR_LIST_SUCCESS } from "../constants/mentorConstants";

export const mentorListReducer = (state = {mentors:[]},action ) => {
    switch (action.type) {
        case MENTOR_LIST_REQUEST:
            return {loading:true, mentors:[]};
        case MENTOR_LIST_SUCCESS:
            return {loading:false, mentors:action.payload};
        case MENTOR_LIST_FAIL:
            return {loading:false, mentors:action.payload};
    
        default:
            return state;
    }
}