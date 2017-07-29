export const SET_GEO = 'SET_GEO'

// set postion

export function setGeo(geo){
  return dispatch => {
   dispatch(dispatchSetGeo(geo));
  }
}

export function dispatchSetGeo(geo){
  return {
    type: SET_GEO
  }
}
