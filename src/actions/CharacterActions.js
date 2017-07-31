import { setCharacter, setLocationHistory } from './apiActions'

export const SET_CHARACTER = 'SET_CHARACTER'
export const SET_LOCATION_HISTORY = 'SET_LOCATION_HISTORY'

export function setUsersCharacter(uid){
  return dispatch => {
    setCharacter(uid, function (err, result) {
      if (result){
          dispatch(dispatchSetCharacter(result.character))
        }
    })
   }
  }


export function dispatchSetCharacter(character){
  return {
    type: SET_CHARACTER,
    character
  }
}


export function setUsersLocationHistory(uid){
  return dispatch => {
    setLocationHistory(uid, function (err, result) {
      if ( result !== null ){
          dispatch(dispatchSetLocationHistory(result.locationhistory))
        }
    })
   }
  }


export function dispatchSetLocationHistory(locationHistory){
  return {
    type: SET_LOCATION_HISTORY,
    locationHistory
  }
}
