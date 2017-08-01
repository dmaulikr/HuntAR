import { FORTIFY } from '../actions/InventoryActions';



const initialState = []
export default function fortifications(state = initialState, action = {}) {
  switch(action.type) {
    case FORTIFY:
      return  [
        ...state,
        action.item.flavorText
      ]
    default:
      return state;
  }
}
