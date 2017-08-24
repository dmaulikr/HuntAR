import { EQUIP_HELM, EQUIP_BODY, EQUIP_WEP} from '../actions/InventoryActions';
import { LOGOUT, SET_EQUIPED_ITEMS } from '../actions/CharacterActions';


const initialState = {}



export default function EquipedItems(state = initialState, action = {}) {
  switch(action.type) {

    case EQUIP_HELM:
      return  {
        ...state,
        head: action.item
      }
    case EQUIP_BODY:
      return  {
        ...state,
        body: action.item
      }
    case EQUIP_WEP:
      return  {
        ...state,
        weapon: action.item
      }
    case SET_EQUIPED_ITEMS:
      return  {
        ...state,
        ...action.EquipedItems.EquipedItems
      }
    case LOGOUT:
      return {}
    default:
      return state;
  }
}
