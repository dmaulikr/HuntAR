import {
  SUMBIT_LOGIN_FORM_SUCCESS,
  SUMBIT_LOGIN_FORM_ERRORS,
  UPDATE_LOGIN_FORM_PASSWORD,
  UPDATE_LOGIN_FORM_EMAIL,
  LOGOUT } from '../actions/LoginFormActions';

const initialState = {
  email: "",
  password: "",
  loggedin: false,
}

export default function loginform(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_LOGIN_FORM_EMAIL:
      return {...state, email: action.email}
    case UPDATE_LOGIN_FORM_PASSWORD:
      return {...state, password: action.password};
    default:
      return state;
  }
}
