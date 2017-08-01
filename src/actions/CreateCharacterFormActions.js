import { saveCharacters } from './apiActions'

export const UPDATE_CHARACTER_NAME = 'UPDATE_CHARACTER_NAME'
export const ADD_CHARACTER_SUCCESS = 'ADD_CHARACTER_SUCCESS'
export const RESET_FORM = 'RESET_FORM'

export const DECREASE_CHARACTER_DEXTERITY = 'DECREASE_CHARACTER_DEXTERITY'
export const DECREASE_CHARACTER_STRENGTH = 'DECREASE_CHARACTER_STRENGTH'
export const DECREASE_CHARACTER_INTELLIGENCE = 'DECREASE_CHARACTER_INTELLIGENCE'
export const DECREASE_CHARACTER_STAMINA = 'DECREASE_CHARACTER_STAMINA'
export const DECREASE_CHARACTER_FORTITUDE = 'DECREASE_CHARACTER_FORTITUDE'
export const INCREASE_CHARACTER_STRENGTH = 'INCREASE_CHARACTER_STRENGTH'
export const INCREASE_CHARACTER_INTELLIGENCE = 'INCREASE_CHARACTER_INTELLIGENCE'
export const INCREASE_CHARACTER_STAMINA = 'INCREASE_CHARACTER_STAMINA'
export const INCREASE_CHARACTER_FORTITUDE = 'INCREASE_CHARACTER_FORTITUDE'
export const INCREASE_CHARACTER_DEXTERITY = 'INCREASE_CHARACTER_DEXTERITY'





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
  let champion = {
    ...character,
    health: ((character.strength * 10) + (character.fortitude * 30)),
    maxHealth: ((character.strength * 10) + (character.fortitude * 30)),
    rateoffire: (character.rateoffire - (character.dexterity * .2)),
    created: true
  }
  saveCharacters(character.uid, champion)
  return dispatch => {
      dispatch(dispatchSubmitCreateCharacter(champion))
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



export function IncreaseStrength(){
  return dispatch => {
      dispatch(dispatchIncreaseStrength())
    }
 }

export function dispatchIncreaseStrength(){
  return {
    type: INCREASE_CHARACTER_STRENGTH
  }
}
export function DecreaseStrength(){
  return dispatch => {
      dispatch(dispatchDecreaseStrength())
    }
 }

export function dispatchDecreaseStrength(){
  return {
    type: DECREASE_CHARACTER_STRENGTH
  }
}
export function IncreaseIntelligence(){
  return dispatch => {
      dispatch(dispatchIncreaseIntelligence())
    }
 }

export function dispatchIncreaseIntelligence(){
  return {
    type: INCREASE_CHARACTER_INTELLIGENCE
  }
}
export function DecreaseIntelligence(){
  return dispatch => {
      dispatch(dispatchDecreaseIntelligence())
    }
 }

export function dispatchDecreaseIntelligence(){
  return {
    type: DECREASE_CHARACTER_INTELLIGENCE
  }
}
export function IncreaseStamina(){
  return dispatch => {
      dispatch(dispatchIncreaseStamina())
    }
 }

export function dispatchIncreaseStamina(){
  return {
    type: INCREASE_CHARACTER_STAMINA
  }
}
export function DecreaseStamina(){
  return dispatch => {
      dispatch(dispatchDecreaseStamina())
    }
 }

export function dispatchDecreaseStamina(){
  return {
    type: DECREASE_CHARACTER_STAMINA
  }
}
export function IncreaseDexterity(){
  return dispatch => {
      dispatch(dispatchIncreaseDexterity())
    }
 }

export function dispatchIncreaseDexterity(){
  return {
    type: INCREASE_CHARACTER_DEXTERITY
  }
}
export function DecreaseDexterity(){
  return dispatch => {
      dispatch(dispatchDecreaseDexterity())
    }
 }

export function dispatchDecreaseDexterity(){
  return {
    type: DECREASE_CHARACTER_DEXTERITY
  }
}
export function IncreaseFortitude(){
  return dispatch => {
      dispatch(dispatchIncreaseFortitude())
    }
 }

export function dispatchIncreaseFortitude(){
  return {
    type: INCREASE_CHARACTER_FORTITUDE
  }
}
export function DecreaseFortitude(){
  return dispatch => {
      dispatch(dispatchDecreaseFortitude())
    }
 }

export function dispatchDecreaseFortitude(){
  return {
    type: DECREASE_CHARACTER_FORTITUDE
  }
}
