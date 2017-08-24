import { SET_HOME_BASE } from '../actions/HomebaseActions';
import { FORTIFY, REPAIR } from '../actions/InventoryActions';
import { LOGOUT } from '../actions/CharacterActions';


// remove state intial character

const initialState = {
  health:100,
  maxHealth:100,
}

export default function base(state = initialState, action = {}) {
  switch(action.type) {
    case SET_HOME_BASE:
      return  {
        ...state,
        homebase: action.location,
        health: 100,
        maxHealth: 100,
        hasHomeBase: true,
      }
    case FORTIFY:
      return  {
        ...state,
        maxHealth: (state.maxHealth + action.item.healthBoost),
      }
    case REPAIR:
      return  {
        ...state,
        health: (state.health + action.item.healthBoost),
      }
    case LOGOUT:
      return  {
        ...state,
        health:100,
        maxHealth:100,
      }
    default:
      return state;
  }
}
