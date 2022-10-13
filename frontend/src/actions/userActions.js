import axios from "axios";
import {
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_FAIL,
  UPDATE_USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
export const login = (email, password, userType) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    // when sending data we want to set header content to be json
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}api/users/login`,
      { email, password, userType },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // saving user in the local storage so as to restore session / page when it comes again after some time
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    // getting token to verify if we are logged in
    const {
      userLogin: { userInfo },
    } = getState();
    // when sending data we want to set header content to be json
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const userType = userInfo.userType;
    console.log("From userActions", userType);
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}api/users/${id}?userType=${userType}`,
      config
    );

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  (name, email, password, userType) => async (dispatch) => {
    console.log(name, email, password, userType);
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      // when sending data we want to set header content to be json
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}api/users`,
        { name, email, password, userType },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      // saving user in the local storage so as to restore session / page when it comes again after some time
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUserDetails = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_USER_DETAILS,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    // when sending data we want to set header content to be json
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}api/users/profile`,
      { ...user },
      config
    );

    dispatch({
      type: UPDATE_USER_DETAILS_SUCCESS,
      payload: data,
    });

    // saving user in the local storage so as to restore session / page when it comes again after some time
    // localStorage.setItem("userUpdatedDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UPDATE_USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("user");
  localStorage.removeItem("userUpdatedDetails");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_LOGOUT });
};
