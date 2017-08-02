import { SUMBIT_LOGIN_FORM_SUCCESS } from '../actions/LoginFormActions';
import { SUMBIT_REGISTER_FORM_SUCCESS } from '../actions/RegisterFormActions';
import { SET_CURRENT_LOCATION } from '../actions/GeoActions';
import { LOGOUT } from '../actions/CharacterActions';

const initialState = {
  loggedin: false,
  atHomeBase: false,
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
    case SET_CURRENT_LOCATION:
      return  {
        ...state,
        currentLocation: action.location
       };
    case LOGOUT:
      return  {...state,
        loggedin: false,
        atHomeBase: false,
      }
    default:
      return state;
  }
}
