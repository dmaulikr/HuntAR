import { setDamage, setCharacter, setLocationHistory, setFortificationsFlavor, setItemHistory, setEquipedItems } from './apiActions'
import { d20 } from '../constants/Dice'

export const SET_CHARACTER = 'SET_CHARACTER'
export const SET_LOCATION = 'SET_LOCATION'
export const SET_ITEMS = 'SET_ITEMS'
export const SET_FLAVOR = 'SET_FLAVOR'
export const SET_DAMAGE = 'SET_DAMAGE'
export const FLEE = 'FLEE'
export const LOGOUT = 'LOGOUT'
export const SET_EQUIPED_ITEMS = 'SET_EQUIPED_ITEMS'

export function logout(){
  return dispatch => {
   dispatch(dispatchLogout());
  }
}

export function dispatchLogout(){
  return {
    type: LOGOUT
  }
}


export function flee(dex){
  if ((d20() + dex ) > 15){
    var escaped = true
  } else {
    var escaped = false
  }
  return dispatch => {
   dispatch(dispatchFlee(escaped));
  }
}

export function dispatchFlee(escaped){
  return {
    type: FLEE,
    escaped
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

// unused
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
  return {
    type: SET_DAMAGE,
    result
  }
}

export function setUsersEquipedItems(uid){
  return dispatch => {
    setEquipedItems(uid, function (err, result) {
      if (result){
          dispatch(dispatchSetEquipedItems(result))
        }
    })
   }
  }


export function dispatchSetEquipedItems(EquipedItems){
  return {
    type: SET_EQUIPED_ITEMS,
    EquipedItems
  }
}
