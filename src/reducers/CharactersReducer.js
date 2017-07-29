import { ADD_CHARACTER_SUCCESS } from '../actions/CreateCharacterFormActions';

// remove state intial character

const initialState = [{
created:
false,
damage:
"100",
health:
"100",
name:
"Dumbledor",
type:
"Hunter",
uid:
"47Iw8os7WwacnCSiXX3OhRcHGFl1"}]

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
