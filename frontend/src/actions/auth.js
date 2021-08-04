import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
} from "./types";

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
