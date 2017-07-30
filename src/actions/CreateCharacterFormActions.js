import { saveCharacters } from './apiActions'

export const UPDATE_CHARACTER_NAME = 'UPDATE_CHARACTER_NAME'
export const UPDATE_CHARACTER_HEALTH = 'UPDATE_CHARACTER_HEALTH'
export const UPDATE_CHARACTER_DAMAGE = 'UPDATE_CHARACTER_DAMAGE'
export const ADD_CHARACTER_SUCCESS = 'ADD_CHARACTER_SUCCESS'
export const RESET_FORM = 'RESET_FORM'

// Character Creation Update Fields

export function updateName(name){
  return dispatch => {
   dispatch(dispatchUpdateName(name));
  }
}

export function dispatchUpdateName(name){
  return {
    type: UPDATE_CHARACTER_NAME,
    name
  }
}

export function updateHealth(health){
  return dispatch => {
   dispatch(dispatchUpdateHealth(health));
  }
}

export function dispatchUpdateHealth(health){
  return {
    type: UPDATE_CHARACTER_HEALTH,
    health
  }
}

export function updateDamage(damage){
  return dispatch => {
   dispatch(dispatchUpdateDamage(damage));
  }
}

export function dispatchUpdateDamage(damage){
  return {
    type: UPDATE_CHARACTER_DAMAGE,
    damage
  }
}


//submit

export function submitCreateCharacter(character){
  saveCharacters(character.uid, character)
  return dispatch => {
      dispatch(dispatchSubmitCreateCharacter(character))
    }
 }

export function dispatchSubmitCreateCharacter(character){

  return {
    type: ADD_CHARACTER_SUCCESS,
    character
  }
}


// reset form

export function resetForm(){
  return dispatch => {
      dispatch(dispatchResetForm())
    }
 }

export function dispatchResetForm(){
  return {
    type: RESET_FORM
  }
}
