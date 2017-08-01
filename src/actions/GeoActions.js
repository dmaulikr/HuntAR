import searchHelper from '../constants/SearchHelper'
import atHomebase from '../constants/locationHelper';

export const SEARCH_CURRENT_LOCATION = 'SEARCH_CURRENT_LOCATION'
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'
export const RESET_RESULTS = 'RESET_RESULTS'

// set postion

export function searchCurrentLocation(){
  return dispatch => {
  navigator.geolocation.getCurrentPosition( (res) => {
    result = {
      location: res,
      result: searchHelper()
     }
    dispatch(dispatchSearchCurrentLocation(result))})
  }
}

export function dispatchSearchCurrentLocation(exploration){
  return {
    type: SEARCH_CURRENT_LOCATION,
    exploration
  }
}

export function setCurrentLocation(){
  return dispatch => {
  navigator.geolocation.getCurrentPosition((res) => {
    dispatch(dispatchSetCurrentLocation(res))})
  }
}

export function dispatchSetCurrentLocation(location){
  return {
    type: SET_CURRENT_LOCATION,
    location
  }
}

export function resetResults(){
  return dispatch => {
   dispatch(dispatchResetResults());
  }
}

export function dispatchResetResults(){
  return {
    type: RESET_RESULTS
  }
}
