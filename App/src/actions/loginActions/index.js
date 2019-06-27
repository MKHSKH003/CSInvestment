
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE ='LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

export const logout = (username) => ({
      type: LOGOUT,
      username,
});

export const login = (username, password) => ({
      type: LOGIN,
      username,
      password
});

export const loginSuccess = (student) => ({
      type: LOGIN_SUCCESS,
      student
});

export const loginFailure = () => ({
      type: LOGIN_FAILURE,
});