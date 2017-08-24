import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { STORE_ITEM, CONSUME_ITEM, FORTIFY, REPAIR } from '../actions/InventoryActions';
import { SET_ITEMS } from '../actions/CharacterActions';
import { LOGOUT } from '../actions/CharacterActions';

const initialState = []

function storeItem(items, storedItem) {
  return items.map((item, index) => {
      if (item.id === storedItem.id) {
        return Object.assign({}, item, {
          stored: !storedItem.stored
        })
      }
      return item
    })
}

function consumeItem(items, consumedItem) {
  return items.map((item, index) => {
      if (item.id === consumedItem.id) {
        return Object.assign({}, item, {
          consumed: true
        })
      }
      return item
    })
}

export default function items(state = initialState, action = {}) {
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
        ...action.items
      ]
    case LOGOUT:
      return []
    default:
      return state;
  }
}
