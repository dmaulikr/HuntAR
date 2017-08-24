import { ADD_CHARACTER_SUCCESS } from '../actions/CreateCharacterFormActions';
import { SET_CHARACTER, FLEE } from '../actions/CharacterActions';
import { SET_HOME_BASE } from '../actions/HomebaseActions';
import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { CONSUME_ITEM, EQUIP_HELM, EQUIP_BODY, EQUIP_WEP } from '../actions/InventoryActions';
import { LOGOUT } from '../actions/CharacterActions';



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
    case CONSUME_ITEM:
      return  {
        ...state,
        health: (state.health + action.item.healthBoost),
      }
    case EQUIP_HELM:
      return  {
        ...state,
        maxHealth: (state.maxHealth + action.item.bonus),
      }
    case EQUIP_BODY:
      return  {
        ...state,
        maxHealth: (state.maxHealth + action.item.bonus),
      }
    case EQUIP_WEP:
      return  {
        ...state,
        rateoffire: action.item.bonus,
      }
    case LOGOUT:
      return {
      ...state,
      created: false,
      hasHomeBase: false,}
    default:
      return state;
  }
}
