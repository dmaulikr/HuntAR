import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { SET_LOCATION_HISTORY } from '../actions/CharacterActions';

const initialState = []

export default function locationHistory(state = initialState, action = {}) {
  switch(action.type) {
    case SEARCH_CURRENT_LOCATION:
      return  [
        ...state,
        action.exploration
      ];
    case SET_LOCATION_HISTORY:
      return  [
        ...state,
        action.location
      ];
    default:
      return state;
  }
}
