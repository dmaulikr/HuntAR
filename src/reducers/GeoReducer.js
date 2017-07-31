import { SET_CURRENT_LOCATION } from '../actions/GeoActions';
import { SET_LOCATION_HISTORY } from '../actions/CharacterActions';

const initialState = []

export default function locationHistory(state = initialState, action = {}) {
  switch(action.type) {
    case SET_CURRENT_LOCATION:
      return  [
        ...state,
        action.location
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
