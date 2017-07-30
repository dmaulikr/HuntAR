export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'

// set postion

export function setCurrentLocation(location){
  return dispatch => {
   dispatch(dispatchSetCurrentLocation(location));
  }
}

export function dispatchSetCurrentLocation(location){
  return {
    type: SET_CURRENT_LOCATION,
    location
  }
}
