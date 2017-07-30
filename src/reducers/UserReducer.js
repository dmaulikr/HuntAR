import { LOGOUT } from '../actions/UserActions';
import { SUMBIT_LOGIN_FORM_SUCCESS } from '../actions/LoginFormActions';
import { SUMBIT_REGISTER_FORM_SUCCESS } from '../actions/RegisterFormActions';

const initialState = {
  email: "",
  uid: "",
  loggedin: false,
}

export default function user(state = initialState, action = {}) {
  switch(action.type) {
    case SUMBIT_REGISTER_FORM_SUCCESS:
      return  {
        ...state,
        uid: action.user.uid,
        email: action.user.email,
        loggedin: true,
       };
    case SUMBIT_LOGIN_FORM_SUCCESS:
      return  {
        ...state,
        uid: action.user.uid,
        email: action.user.email,
        loggedin: true,
       };
    default:
      return state;
  }
}
