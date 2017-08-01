import { SEARCH_CURRENT_LOCATION, RESET_RESULTS } from '../actions/GeoActions';
import { eventDescriptionHelper } from '../constants/SearchHelper'


export default function SearchResultReducer(state = {text:""}, action = {}) {
  switch(action.type) {
    case SEARCH_CURRENT_LOCATION:
      if (action.exploration.result.type === "ITEM" || action.exploration.result.type === "NOTHING") {
        return {...state, text: eventDescriptionHelper(action.exploration.result)}
      }
      return {...state}
    case RESET_RESULTS:
      return {...state, text:""}
    default:
      return state;
  }
}
