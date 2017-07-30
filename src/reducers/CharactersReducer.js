import { ADD_CHARACTER_SUCCESS } from '../actions/CreateCharacterFormActions';
import { SET_CHARACTER } from '../actions/CharacterActions';
import { SET_HOME_BASE } from '../actions/HomebaseActions';

// remove state intial character

const initialState = {
  created: false,
  hasHomeBase: false,
}

export default function characters(state = initialState, action = {}) {
  switch(action.type) {
    case ADD_CHARACTER_SUCCESS:
      return  {
        ...state,
        ...action.character,
        created: true,
      }
    case SET_CHARACTER:
      return  {
        ...state,
        ...action.character,
      }
    case SET_HOME_BASE:
      return  {
        ...state,
        homebase: action.location,
        hasHomeBase: true,
      }
    default:
      return state;
  }
}
