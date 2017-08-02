import {
  SUMBIT_LOGIN_FORM_SUCCESS,
  SUMBIT_LOGIN_FORM_ERRORS,
  UPDATE_LOGIN_FORM_PASSWORD,
  UPDATE_LOGIN_FORM_EMAIL,
  } from '../actions/LoginFormActions';
  import { LOGOUT } from '../actions/CharacterActions';

const initialState = {
  email: "Gbrlxvi@gmail.com",
  password: "Password",
  loggedin: false,
}

export default function loginform(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_LOGIN_FORM_EMAIL:
      return {...state, email: action.email}
    case UPDATE_LOGIN_FORM_PASSWORD:
      return {...state, password: action.password};
    case LOGOUT:
      return {...state,
        email: "Gbrlxvi@gmail.com",
        password: "Password",
        loggedin: false,
      };
    default:
      return state;
  }
}
