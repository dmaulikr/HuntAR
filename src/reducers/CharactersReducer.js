import { ADD_CHARACTER_SUCCESS } from '../actions/CreateCharacterFormActions';

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
    default:
      return state;
  }
}
