import { combineReducers } from 'redux';
import user from './UserReducer';
import loginForm from './LoginFormReducer';
import characters from './CharactersReducer';
import characterCreationForm from './CharacterCreationFormReducer';
import selectedCharacter from './SelectedCharacterReducer';
import monsters from './MonstersReducer';

export default combineReducers({
   user,
   loginForm,
   characters,
   characterCreationForm,
   selectedCharacter,
   monsters
})
