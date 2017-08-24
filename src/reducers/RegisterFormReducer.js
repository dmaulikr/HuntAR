import {
  SUMBIT_REGISTER_FORM_SUCCESS,
  SUMBIT_REGISTER_FORM_ERRORS,
  UPDATE_REGISTER_FORM_PASSWORD,
  UPDATE_REGISTER_FORM_EMAIL } from '../actions/RegisterFormActions';
  import { LOGOUT } from '../actions/CharacterActions';

const initialState = {
  email: "",
  password: "",
  loggedin: false,
}

export default function registerform(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_REGISTER_FORM_EMAIL:
      return {...state, email: action.email}
    case UPDATE_REGISTER_FORM_PASSWORD:
      return {...state, password: action.password};
    case LOGOUT:
      return  {...state,
        email: "",
        password: "",
        loggedin: false,
      }
    default:
      return state;
  }
}
