import { ADD_CHARACTER_SUCCESS } from '../actions/CreateCharacterFormActions';
import { SET_CHARACTER, FLEE } from '../actions/CharacterActions';
import { SET_HOME_BASE } from '../actions/HomebaseActions';
import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { CONSUME_ITEM } from '../actions/InventoryActions';



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
    case FLEE:
      return  {
        ...state,
        health: (state.health - 10),
      }
    default:
      return state;
  }
}
