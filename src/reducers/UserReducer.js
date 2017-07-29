import { LOGOUT } from '../actions/UserActions';
import { SUMBIT_LOGIN_FORM_SUCCESS } from '../actions/LoginFormActions';

const initialState = {
  email: "gbrlxvi@gmail.com",
  uid: "47Iw8os7WwacnCSiXX3OhRcHGFl1",
  loggedin: true,
}

export default function user(state = initialState, action = {}) {
  switch(action.type) {
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
