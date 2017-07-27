import { combineReducers } from 'redux';
import user from './UserReducer';
import loginForm from './LoginFormReducer';
import characters from './CharactersReducer';
import characterCreationForm from './CharacterCreationFormReducer';

export default combineReducers({
   user, loginForm, characters, characterCreationForm
})
