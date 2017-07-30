import { ADD_CHARACTER_SUCCESS } from '../actions/CreateCharacterFormActions';
import { SET_CHARACTER } from '../actions/CharacterActions';

// remove state intial character

const initialState = {created: false}

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
        created: true,
      }
    default:
      return state;
  }
}
