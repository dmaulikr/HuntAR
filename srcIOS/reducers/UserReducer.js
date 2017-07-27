import { SUMBIT_LOGIN_FORM_SUCCESS, LOGOUT } from '../actions/UserActions';

const initialState = {
  email: "",
  id: "",
  loggedin: false,
  password: "",
}

export default function user(state = initialState, action = {}) {
  switch(action.type) {
    default:
      return state;
  }
}
