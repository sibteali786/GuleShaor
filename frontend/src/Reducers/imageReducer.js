import {
  SET_IMAGE_URL_FAIL,
  SET_IMAGE_URL_REQUEST,
  SET_IMAGE_URL_SUCCESS,
} from "../constants/imageUploadConstants";

export const imageUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_IMAGE_URL_REQUEST:
      return { loading: true };
    case SET_IMAGE_URL_SUCCESS:
      return { loading: false, imageUrl: action.payload };
    case SET_IMAGE_URL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
