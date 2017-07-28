import { ADD_CHARACTER_SUCCESS } from '../actions/CreateCharacterFormActions';

// remove state intial character

const initialState = []

export default function characters(state = initialState, action = {}) {
  switch(action.type) {
    case ADD_CHARACTER_SUCCESS:
      return  [
        ...state,
        action.character,
      ];
    default:
      return state;
  }
}
