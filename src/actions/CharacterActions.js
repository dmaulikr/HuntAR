export const SELECT_CHARACTER = 'SELECT_CHARACTER'

export function selectCharacter(character){
  return dispatch => {
   dispatch(dispatchSelectCharacter(character));
  }
}

export function dispatchSelectCharacter(character){
  return {
    type: SELECT_CHARACTER,
    character
  }
}
