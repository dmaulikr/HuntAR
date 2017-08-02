import { EQUIP_HELM, EQUIP_BODY, EQUIP_WEP} from '../actions/InventoryActions';


const initialState = {
  head:{},
  body:{},
  weapon:{}
}



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
    default:
      return state;
  }
}
