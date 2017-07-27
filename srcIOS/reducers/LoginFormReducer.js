import { SUMBIT_LOGIN_FORM_SUCCESS, SUMBIT_LOGIN_FORM_ERRORS, UPDATE_LOGIN_FORM_PASSWORD, SUMBIT_LOGIN_FORM_SUCCESS, LOGOUT } from '../actions/UserActions';

const initialState = {
  email: "",
  password: "",
  loggedin: false,
}

export default function loginform(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_LOGIN_FORM_EMAIL:
      return Object.assign({}, loginform, {email: action.email});
    case UPDATE_LOGIN_FORM_PASSWORD:
      return Object.assign({}, loginform, {password: action.password});
    case SUMBIT_LOGIN_FORM_SUCCESS:
      return Object.assign({}, loginForm, {"loggedin": true});
    default:
      return state;
  }
}
