export const UPDATE_CHARACTER_NAME = 'UPDATE_CHARACTER_NAME'
export const UPDATE_CHARACTER_TYPE = 'UPDATE_CHARACTER_TYPE'
export const ADD_CHARACTER_SUCCESS = 'ADD_CHARACTER_SUCCESS'

// loginform edit fields

export function updateLoginFormEmail(email){
  return dispatch => {
   dispatch(dispatchUpdateLoginFormEmail(email));
  }
}

export function dispatchUpdateLoginFormEmail(email){
  return {
    type: UPDATE_CHARACTER_NAME,
    email
  }
}

export function updateLoginFormPassword(password){
  return dispatch => {
   dispatch(dispatchUpdateLoginFormPassword(password));
  }
}

export function dispatchUpdateLoginFormPassword(password){
  return {
    type: UPDATE_CHARACTER_TYPE,
    password
  }
}

export function submitLoginForm(user){
  return dispatch => {
      dispatch(dispatchSubmitLoginFormSucess(user))
    }
 }

export function dispatchSubmitLoginFormSucess(user){
  return {
    type: ADD_CHARACTER_SUCCESS,
    user
  }
}
