import { ADD_CHARACTER_SUCCESS } from '../actions/CreateCharacterActions';

const initialState = []

export default function character(state = initialState, action = {}) {
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
