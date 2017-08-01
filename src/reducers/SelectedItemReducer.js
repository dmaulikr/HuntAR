import { SELECTED_ITEM } from '../actions/UserActions';
// unused implement later


const initialState = {
  item: {}
  selected: false,
}

export default function user(state = initialState, action = {}) {
  switch(action.type) {
    case SELECTED_ITEM:
      return  {
        ...state,
        item: action.item,
        selected: true,
       };
    default:
      return state;
  }
}
