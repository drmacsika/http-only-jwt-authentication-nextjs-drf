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
} from "./types";

// Action creators
// Signup
export const signup =
  (first_name, last_name, username, password, re_password) =>
  async (dispatch) => {
    const body = JSON.stringify({
      first_name,
      last_name,
      username,
      password,
      re_password,
    });

    dispatch({
      type: SET_AUTH_LOADING,
    });

    try {
      const res = await fetch("/api/accounts/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (res.status === 201) {
        dispatch({
          type: SIGNUP_SUCCESS,
        });
      } else {
        dispatch({
          type: SIGNUP_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
      });
    }
    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
  };

export const reset_signup_success = () => (dispatch) => {
  dispatch({
    type: RESET_SIGNUP_SUCCESS,
  });
};

//Login
export const login = (username, password) => async (dispatch) => {
  const body = JSON.stringify({
    username,
    password,
  });

  dispatch({
    type: SET_AUTH_LOADING,
  });

  try {
    const res = await fetch("/api/accounts/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
      });
      dispatch(load_user());
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
  dispatch({
    type: REMOVE_AUTH_LOADING,
  });
};

export const load_user = () => async (dispatch) => {
  try {
    const res = await fetch("api/accounts/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 200) {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
    });
  }
};

export const check_auth_status = () => async (dispatch) => {
  try {
    const res = await fetch("/api/accounts/verify-cookie-token", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (res.status === 200) {
      dispatch({
        type: AUTHENTICATED_SUCCESS,
      });
      dispatch(load_user());
    } else {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await fetch("/api/accounts/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    });

    if (res.status === 200) {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: LOGOUT_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL,
    });
  }
};
