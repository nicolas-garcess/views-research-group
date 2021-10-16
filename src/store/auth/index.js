import { saveUser } from '../../helpers/user';

/** ACTION TYPES */

import { URL_PATH } from '../../api';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

/** ACTION CREATORS */

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  try {
    const response = await fetch(URL_PATH.LOGIN,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        })
      });

    const loginResponse = await response.json();

    if (loginResponse.error === null) {
      saveUser(loginResponse);
    }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginResponse
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
    });
  }
};

const INITIAL_STATE = {
  loginResponse: null,
  error: null,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: payload,
        error: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: 'Something went wrong with the query',
      };
    default:
      return {
        ...state,
      };
  }
}
