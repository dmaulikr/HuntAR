import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { SET_LOCATION } from '../actions/CharacterActions';
import { LOGOUT } from '../actions/CharacterActions';

const initialState = []

export default function locationHistory(state = initialState, action = {}) {
  switch(action.type) {
    case SEARCH_CURRENT_LOCATION:
      return  [
        ...state,
        action.exploration
      ];
    case SET_LOCATION:
      return  [
        ...action.location
      ]
    case LOGOUT:
      return []
    default:
      return state;
  }
}
