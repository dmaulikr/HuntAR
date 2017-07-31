import searchHelper from '../constants/SearchHelper'

export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'
export const SEARCH_RESULT_MONSTER = 'SEARCH_RESULT_MONSTER'

// set postion

export function setCurrentLocation(){
  return dispatch => {
  navigator.geolocation.getCurrentPosition( (res) => {
    result = {
      location: res,
      result: searchHelper()
     }
    dispatch(dispatchSetCurrentLocation(result))})
  }
}

export function dispatchSetCurrentLocation(exploration){
  return {
    type: SET_CURRENT_LOCATION,
    exploration
  }
}
