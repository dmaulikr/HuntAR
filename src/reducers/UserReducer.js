import { LOGOUT } from '../actions/UserActions';
import { SUMBIT_LOGIN_FORM_SUCCESS } from '../actions/LoginFormActions';

const initialState = {
  email: "",
  id: "",
  loggedin: false,
}

export default function user(state = initialState, action = {}) {
  switch(action.type) {
    case SUMBIT_LOGIN_FORM_SUCCESS:
      return  {
        ...state,
        id: action.user.id,
        email: action.user.email,
        loggedin: true,
       };
    default:
      return state;
  }
}
