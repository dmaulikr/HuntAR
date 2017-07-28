import * as apiActions from './apiActions'

export const UPDATE_LOGIN_FORM_EMAIL = 'UPDATE_LOGIN_FORM_EMAIL'
export const UPDATE_LOGIN_FORM_PASSWORD = 'UPDATE_LOGIN_FORM_PASSWORD'
export const SUMBIT_LOGIN_FORM_SUCCESS = 'SUMBIT_LOGIN_FORM_SUCCESS'

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

export function submitLoginForm(form){
  return dispatch => {
    apiActions.signin(form).done((res)=> {
    dispatch(dispatchSubmitLoginFormSucess({
      email: form.email,
      id: res.uid
    }))
  })

    }
 }

export function dispatchSubmitLoginFormSucess(user){
  return {
    type: SUMBIT_LOGIN_FORM_SUCCESS,
    user
  }
}
