import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';

export default function items(state = {text:""}, action = {}) {
  switch(action.type) {
    case SEARCH_CURRENT_LOCATION:
      if (action.exploration.result.type === "ITEM") {
        return [...state, action.exploration.result.payload]
      }
      return [...state]
    case STORE_ITEM:
      return storeItem(state, action.item)
    case CONSUME_ITEM:
      return consumeItem(state, action.item)
    case FORTIFY:
      return consumeItem(state, action.item)
    case REPAIR:
      return consumeItem(state, action.item)
    case SET_ITEMS:
      return  [
        ...state,
        ...action.items,
      ]
    default:
      return state;
  }
}
