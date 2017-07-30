export const SET_HOME_BASE = 'SET_HOME_BASE'

// logout

export function setHomebase(location){
  return dispatch => {
   dispatch(dispatchSetHomebase(location));
  }
}

export function dispatchSetHomebase(location){
  return {
    type: SET_HOME_BASE,
    location
  }
}
