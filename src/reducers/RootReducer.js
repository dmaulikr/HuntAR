import { combineReducers } from 'redux';
import user from './UserReducer';
import loginForm from './LoginFormReducer';
import registerForm from './RegisterFormReducer';
import characters from './CharactersReducer';
import characterCreationForm from './CharacterCreationFormReducer';
import monsters from './MonstersReducer';
import locationHistory from './GeoReducer';
import items from './ItemsReducer';
import base from './BaseReducer';
import fortificationsFlavor from './FortificationsFlavorReducer';
import SearchResult from './SearchResultReducer';

export default combineReducers({
   user,
   loginForm,
   characters,
   characterCreationForm,
   monsters,
   registerForm,
   locationHistory,
   items,
   base,
   fortificationsFlavor,
   SearchResult
})
