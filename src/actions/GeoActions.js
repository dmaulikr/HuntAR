import searchHelper from '../constants/SearchHelper'

export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'
export const SEARCH_RESULT_MONSTER = 'SEARCH_RESULT_MONSTER'

// set postion

export function setCurrentLocation(){
  return dispatch => {
  navigator.geolocation.getCurrentPosition( (res) => {
    dispatch(dispatchSetCurrentLocation(res))})
  }
}

export function dispatchSetCurrentLocation(location){
  return {
    type: SET_CURRENT_LOCATION,
    location
  }
}

export function searchArea(location){
  return dispatch => {
    temp = searchHelper()
    switch(temp.result) {
      case 'MONSTER':
        return  dispatch(dispatchSearchResultMonster(temp.payload));
      case 'ITEM':
        return "not done"
      default:
        return 'nothing found'
    }
  }
}

export function dispatchSearchResultMonster(monster){
  return {
    type: SEARCH_RESULT_MONSTER,
    monster
  }
}
