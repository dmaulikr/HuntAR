import {
  UPDATE_CHARACTER_NAME,
  UPDATE_CHARACTER_HEALTH,
  UPDATE_CHARACTER_DAMAGE,
  ADD_CHARACTER_SUCCESS,
  RESET_FORM
} from '../actions/CreateCharacterFormActions';

const initialState = {
}

export default function characterCreation(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_CHARACTER_NAME:
      return {...state, name: action.name}
    case UPDATE_CHARACTER_HEALTH:
      return {...state, health: action.health};
    case UPDATE_CHARACTER_DAMAGE:
      return {...state, damage: action.damage}
    case ADD_CHARACTER_SUCCESS:
      return {...state, created: true}
    case RESET_FORM:
      return {...state,
        health: 0,
        damage: 0,
        name:"",
        type:"Hunter",
        created:false}
    default:
      return state;
  }
}
