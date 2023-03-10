import {
  SET_IMAGE_URL_FAIL,
  SET_IMAGE_URL_REQUEST,
  SET_IMAGE_URL_SUCCESS,
} from "../constants/imageUploadConstants";

export const setProfileImage = (url) => (dispatch) => {
  try {
    dispatch({ type: SET_IMAGE_URL_REQUEST });
    dispatch({ type: SET_IMAGE_URL_SUCCESS, payload: url });
    // saving user in the local storage so as to restore session / page when it comes again after some time
    localStorage.setItem("profileImage", url);
  } catch (error) {
    dispatch({ type: SET_IMAGE_URL_FAIL, payload: error.message });
  }
};
