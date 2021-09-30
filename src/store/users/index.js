/** ACTION TYPES */
export const SEARCHING_USERS_LOADING = 'SEARCHING_USERS_LOADING';
export const SEARCHING_USERS_SUCCESS = 'SEARCHING_USERS_SUCCESS';
export const SEARCHING_USERS_ERROR = 'SEARCHING_USERS_ERROR';

/** ACTION CREATORS */

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
  users: null,
  isSearchingUsers: false,
  error: null,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
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
