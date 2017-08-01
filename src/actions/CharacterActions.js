import { setDamage, setCharacter, setLocationHistory, setFortificationsFlavor, setItemHistory } from './apiActions'

export const SET_CHARACTER = 'SET_CHARACTER'
export const SET_LOCATION = 'SET_LOCATION'
export const SET_ITEMS = 'SET_ITEMS'
export const SET_FLAVOR = 'SET_FLAVOR'
export const SET_DAMAGE = 'SET_DAMAGE'
export const FLEE = 'FLEE'



export function flee(){
  return dispatch => {
   dispatch(dispatchFlee());
  }
}

export function dispatchFlee(){
  return {
    type: FLEE
  }
}

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
      if (result){
          dispatch(dispatchSetLocationHistory(result.locationhistory))
        }
    })
   }
  }


export function dispatchSetLocationHistory(location){
  return {
    type: SET_LOCATION,
    location
  }
}




export function setUsersItemHistory(uid){
  return dispatch => {
    setItemHistory(uid, function (err, result) {
      if (result){
          dispatch(dispatchSetItemHistory(result.items))
        }
    })
   }
  }


export function dispatchSetItemHistory(items){
  return {
    type: SET_ITEMS,
    items
  }
}




export function setUsersFortificationsFlavor(uid){
  return dispatch => {
    setFortificationsFlavor(uid, function (err, result) {
      if (result){
          dispatch(dispatchSetFortificationsFlavor(result.fortificationsFlavor))
        }
    })
   }
  }


export function dispatchSetFortificationsFlavor(fortificationsFlavor){
  return {
    type: SET_FLAVOR,
    fortificationsFlavor
  }
}

export function setUsersDamage(uid){
  return dispatch => {
    setDamage(uid, function (err, result) {
      if (result){
          dispatch(dispatchSetDamage(result))
        }
    })
   }
  }


export function dispatchSetDamage(result){
  debugger
  return {
    type: SET_DAMAGE,
    result
  }
}
