import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { FLEE } from '../actions/CharacterActions';
import { d20 } from '../constants/Dice'
import { LOGOUT } from '../actions/CharacterActions';


const initialState = []

export default function monsters(state = initialState, action = {}) {
  switch(action.type) {
    case SEARCH_CURRENT_LOCATION:
      if (action.exploration.result.type === "MONSTER") {
        return [...state, action.exploration.result.payload]
      }
      return [...state]
    case FLEE:
    if (action.escaped) {
      return state.filter(monster => monster.name === "" )
    }
    return [...state]
  case LOGOUT:
    return  initialState
    default:
      return state;
  }
}
