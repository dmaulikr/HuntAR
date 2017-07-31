import { SET_CURRENT_LOCATION } from '../actions/GeoActions';


const initialState = []

export default function monsters(state = initialState, action = {}) {
  switch(action.type) {
    case SET_CURRENT_LOCATION:
    debugger
      if (action.exploration.result.type === "MONSTER") {
        return [...state, action.exploration.result.payload]
      }
      return [...state]
    default:
      return state;
  }
}
