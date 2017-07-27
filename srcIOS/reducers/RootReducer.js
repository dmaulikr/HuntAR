import { combineReducers } from 'redux';
import user from './UserReducer';
import loginForm from './LoginFormReducer';

export default combineReducers({
   user, loginForm
})
