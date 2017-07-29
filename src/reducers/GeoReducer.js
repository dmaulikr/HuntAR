import { SET_GEO } from '../actions/GeoActions';

const initialState = []

export default function user(state = initialState, action = {}) {
  switch(action.type) {
    case SET_GEO:
      return  [
        ...state,
        action.geo
      ];
    default:
      return state;
  }
}
