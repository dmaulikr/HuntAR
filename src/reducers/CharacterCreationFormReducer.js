import {
  DECREASE_CHARACTER_DEXTERITY,
  DECREASE_CHARACTER_STRENGTH,
  DECREASE_CHARACTER_INTELLIGENCE,
  DECREASE_CHARACTER_STAMINA,
  DECREASE_CHARACTER_FORTITUDE,
  INCREASE_CHARACTER_STRENGTH,
  INCREASE_CHARACTER_INTELLIGENCE,
  INCREASE_CHARACTER_STAMINA,
  INCREASE_CHARACTER_FORTITUDE,
  INCREASE_CHARACTER_DEXTERITY,
  ADD_CHARACTER_SUCCESS,
  UPDATE_CHARACTER_NAME,
  RESET_FORM
} from '../actions/CreateCharacterFormActions';
import { LOGOUT } from '../actions/CharacterActions';

const initialState = {
  health: 0,
  rateoffire: 2,
  name:"",
  created:false,
  avaliblePoints: 10,
  intelligence: 0,
  strength: 0,
  stamina: 0,
  dexterity: 0,
  fortitude: 0,
  created: false,
}

export default function characterCreation(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_CHARACTER_NAME:
      return {...state, name: action.name}
    case INCREASE_CHARACTER_DEXTERITY:
          if (state.avaliblePoints > 0){
            return ({...state, dexterity: (state.dexterity + 1), avaliblePoints: (state.avaliblePoints -1)})}
            return {...state}
    case DECREASE_CHARACTER_DEXTERITY:
    if (state.avaliblePoints <= 10){
      return ({...state, dexterity: (state.dexterity - 1), avaliblePoints: (state.avaliblePoints +1)})}
      return {...state}
    case DECREASE_CHARACTER_STRENGTH:
    if (state.avaliblePoints <= 10){
      return ({...state, strength: (state.strength - 1), avaliblePoints: (state.avaliblePoints +1)})}
      return {...state}
    case DECREASE_CHARACTER_INTELLIGENCE:
    if (state.avaliblePoints <= 10){
      return ({...state, intelligence: (state.intelligence - 1), avaliblePoints: (state.avaliblePoints +1)})}
      return {...state}
    case DECREASE_CHARACTER_STAMINA:
    if (state.avaliblePoints <= 10){
      return ({...state, stamina: (state.stamina - 1), avaliblePoints: (state.avaliblePoints +1)})}
      return {...state}
    case DECREASE_CHARACTER_FORTITUDE:
    if (state.avaliblePoints <= 10){
      return ({...state, fortitude: (state.fortitude - 1), avaliblePoints: (state.avaliblePoints +1)})}
      return {...state}
    case INCREASE_CHARACTER_STRENGTH:
    if (state.avaliblePoints > 0){
      return ({...state, strength: (state.strength + 1), avaliblePoints: (state.avaliblePoints -1)})}
      return {...state}
    case INCREASE_CHARACTER_INTELLIGENCE:
    if (state.avaliblePoints > 0){
      return ({...state, intelligence: (state.intelligence + 1), avaliblePoints: (state.avaliblePoints -1)})}
      return {...state}
    case INCREASE_CHARACTER_STAMINA:
    if (state.avaliblePoints > 0){
      return ({...state, stamina: (state.stamina + 1), avaliblePoints: (state.avaliblePoints -1)})}
      return {...state}
    case INCREASE_CHARACTER_FORTITUDE:
    if (state.avaliblePoints > 0){
      return ({...state, fortitude: (state.fortitude + 1), avaliblePoints: (state.avaliblePoints -1)})}
      return {...state}
    case ADD_CHARACTER_SUCCESS:
      return {...state, created: true}
    case RESET_FORM:
      return {...state,
        health: 0,
        rateoffire: 2,
        name:"",
        type:"Hunter",
        created:false,
        avaliblePoints: 10,
        intelligence: 0,
        strength: 0,
        stamina: 0,
        dexterity: 0,
        fortitude: 0,
        created: false,
      }
    case LOGOUT:
      return {...state,
        health: 0,
        rateoffire: 2,
        name:"",
        type:"Hunter",
        created:false,
        avaliblePoints: 10,
        intelligence: 0,
        strength: 0,
        stamina: 0,
        dexterity: 0,
        fortitude: 0,
        created: false,
      }
    default:
      return state;
  }
}
