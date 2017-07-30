import { combineReducers } from 'redux';
import user from './UserReducer';
import loginForm from './LoginFormReducer';
import registerForm from './RegisterFormReducer';
import characters from './CharactersReducer';
import characterCreationForm from './CharacterCreationFormReducer';
import monsters from './MonstersReducer';
import location from './GeoReducer';

export default combineReducers({
   user,
   loginForm,
   characters,
   characterCreationForm,
   monsters,
   registerForm,
   location
})
