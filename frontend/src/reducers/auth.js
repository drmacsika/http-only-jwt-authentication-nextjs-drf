import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
} from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  signup_success: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup_success: true,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_AUTH_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
