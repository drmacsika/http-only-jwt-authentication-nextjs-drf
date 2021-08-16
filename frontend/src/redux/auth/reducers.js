import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  RESET_SIGNUP_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
} from "./types";

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
    case RESET_SIGNUP_SUCCESS:
      return {
        ...state,
        signup_success: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
      };
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case REFRESH_SUCCESS:
      return {
        ...state,
      };
    case REFRESH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_FAIL:
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
