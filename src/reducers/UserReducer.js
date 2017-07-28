import { LOGOUT } from '../actions/UserActions';
import { SUMBIT_LOGIN_FORM_SUCCESS } from '../actions/LoginFormActions';

const initialState = {
  email: "email",
  id: "1",
  loggedin: true,
  password: "password",
}

export default function user(state = initialState, action = {}) {
  switch(action.type) {
    case SUMBIT_LOGIN_FORM_SUCCESS:
      return  {
        ...state,
        password: action.user.password,
        email: action.user.email,
        loggedin: true,
       };
    default:
      return state;
  }
}
