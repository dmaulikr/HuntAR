import { combineReducers } from 'redux';
import user from './UserReducer';
import loginForm from './LoginFormReducer';
import registerForm from './RegisterFormReducer';
import characters from './CharactersReducer';
import characterCreationForm from './CharacterCreationFormReducer';
import selectedCharacter from './SelectedCharacterReducer';
import monsters from './MonstersReducer';
import geo from './GeoReducer';

export default combineReducers({
   user,
   loginForm,
   characters,
   characterCreationForm,
   selectedCharacter,
   monsters,
   registerForm,
   geo
})
