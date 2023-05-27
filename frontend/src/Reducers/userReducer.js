import {
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_FAIL,
  UPDATE_USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_FAIL_GOOGLE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_GOOGLE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_SUCCESS_GOOGLE,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userLoginWithGoogleReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST_GOOGLE:
      return { loading: true };
    case USER_LOGIN_SUCCESS_GOOGLE:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_LOGIN_FAIL_GOOGLE:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const updateUserDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      return { loading: true };
    case UPDATE_USER_DETAILS_SUCCESS:
      return { loading: false, userUpdatedDetails: action.payload };
    case UPDATE_USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
