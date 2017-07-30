import { setCharacter } from './apiActions'

export const SET_CHARACTER = 'SET_CHARACTER'

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
