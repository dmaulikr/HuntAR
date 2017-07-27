import { combineReducers } from 'redux';
import user from './UserReducer';
import loginForm from './LoginFormReducer';
import character from './CharacterReducer';

export default combineReducers({
   user, loginForm, character
})
