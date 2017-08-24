import { FORTIFY } from '../actions/InventoryActions';
import { SET_FLAVOR } from '../actions/CharacterActions';
import { LOGOUT } from '../actions/CharacterActions';


const initialState = []
export default function fortifications(state = initialState, action = {}) {
  switch(action.type) {
    case FORTIFY:
      return  [
        ...state,
        action.item.flavorText
      ]
    case SET_FLAVOR:
      return  [
        ...state,
        ...action.fortificationsFlavor,
      ]
    case LOGOUT:
      return []
    default:
      return state;
  }
}
