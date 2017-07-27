import * as apiCalls from '../apiCalls/userApiCalls';
export const UPDATE_LOGIN_FORM_EMAIL = 'UPDATE_LOGIN_FORM_EMAIL'
export const UPDATE_LOGIN_FORM_PASSWORD = 'UPDATE_LOGIN_FORM_PASSWORD'
export const SUMBIT_LOGIN_FORM_SUCCESS = 'SUMBIT_LOGIN_FORM_SUCCESS'
export const LOGOUT = 'LOGOUT'

// logout

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

// loginform edit fields

export function updateLoginFormEmail(email){
  return dispatch => {
   dispatch(dispatchUpdateLoginFormEmail(email));
  }
}

export function dispatchUpdateLoginFormEmail(email){
  return {
    type: UPDATE_LOGIN_FORM_EMAIL,
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
    type: UPDATE_LOGIN_FORM_PASSWORD,
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
    type: SUMBIT_LOGIN_FORM_SUCCESS,
    user
  }
}
export function dispatchSubmitLoginFormErrors(errors){
  return {
    type: SUMBIT_LOGIN_FORM_ERRORS,
    errors
  }
}
