import { SEARCH_RESULT_MONSTER } from '../actions/GeoActions';


const initialState = []

export default function monsters(state = initialState, action = {}) {
  switch(action.type) {
    case SEARCH_RESULT_MONSTER:
      return [...state, action.monster]
    default:
      return state;
  }
}
