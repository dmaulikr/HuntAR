import { setCharacter } from './apiActions'

export const SET_CHARACTER = 'SET_CHARACTER'
export const SET_LOCATION_HISTORY = 'SET_LOCATION_HISTORY'

export function setUsersCharacter(uid){
  return dispatch => {
    setCharacter(uid, function (err, result) {
          dispatch(dispatchSetCharacter(result))
    })
   }
  }


export function dispatchSetCharacter(character){
  return {
    type: SET_CHARACTER,
    character
  }
}


export function setLocationHistory(uid){
  return dispatch => {
    setCharacter(uid, function (err, result) {
          dispatch(dispatchSetLocationHistory(result))
    })
   }
  }


export function dispatchSetLocationHistory(locationHistory){
  return {
    type: SET_LOCATION_HISTORY,
    locationHistory
  }
}
