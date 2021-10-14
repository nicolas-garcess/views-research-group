/** ACTION TYPES */

import { URL_PATH } from '../../api';

export const SEARCHING_USERS_LOADING = 'SEARCHING_USERS_LOADING';
export const SEARCHING_USERS_SUCCESS = 'SEARCHING_USERS_SUCCESS';
export const SEARCHING_USERS_ERROR = 'SEARCHING_USERS_ERROR';

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

export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: SEARCHING_USERS_LOADING,
  });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users',
      { method: 'GET' });

    const users = await response.json();

    dispatch({
      type: SEARCHING_USERS_SUCCESS,
      payload: users
    });
  } catch (error) {
    dispatch({
      type: SEARCHING_USERS_ERROR,
    });
    console.log('error en la búsqueda');
  }
};

const INITIAL_STATE = {
  loginResponse: null,
  users: null,
  isSearchingUsers: false,
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
    case SEARCHING_USERS_LOADING:
      return {
        ...state,
        isSearchingUsers: true,
      };
    case SEARCHING_USERS_SUCCESS:
      return {
        ...state,
        isSearchingUsers: false,
        users: payload,
        error: null,
      };
    case SEARCHING_USERS_ERROR:
      return {
        ...state,
        isSearchingUsers: false,
        error: 'Something went wrong with the query',
      };
    default:
      return {
        ...state,
      };
  }
}
