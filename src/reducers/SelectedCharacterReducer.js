import {
SELECT_CHARACTER
} from '../actions/CharacterActions';

const initialState = {
  character:{},
  selected:false
}

export default function selectedCharacter(state = initialState, action = {}) {
  switch(action.type) {
    case SELECT_CHARACTER:
      return {...state,
        character: action.character,
        selected: true}
    default:
      return state;
  }
}
