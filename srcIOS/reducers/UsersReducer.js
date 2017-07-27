// import { SUMBIT_LOGIN_FORM_SUCCESS, LOGOUT } from '../actions/users';

const initialState = {
  email: "",
  id: "",
  loggedin: false,
  password: "",
}

export default function users(state = initialState, action = {}) {
  switch(action.type) {
    default:
      return state;
  }
}
