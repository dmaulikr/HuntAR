import * as apiActions from './apiActions'

export const UPDATE_REGISTER_FORM_EMAIL = 'UPDATE_REGISTER_FORM_EMAIL'
export const UPDATE_REGISTER_FORM_PASSWORD = 'UPDATE_REGISTER_FORM_PASSWORD'
export const SUMBIT_REGISTER_FORM_SUCCESS = 'SUMBIT_REGISTER_FORM_SUCCESS'

// registerform edit fields

export function updateRegisterFormEmail(email){
  return dispatch => {
   dispatch(dispatchUpdateRegisterFormEmail(email));
  }
}

export function dispatchUpdateRegisterFormEmail(email){
  return {
    type: UPDATE_REGISTER_FORM_EMAIL,
    email
  }
}

export function updateRegisterFormPassword(password){
  return dispatch => {
   dispatch(dispatchUpdateRegisterFormPassword(password));
  }
}

export function dispatchUpdateRegisterFormPassword(password){
  return {
    type: UPDATE_REGISTER_FORM_PASSWORD,
    password
  }
}

export function submitRegisterForm(form){
  apiActions.register(form)
  return dispatch => {
      dispatch(dispatchSubmitRegisterFormSucess(form))
    }
 }

export function dispatchSubmitRegisterFormSucess(user){
  return {
    type: SUMBIT_REGISTER_FORM_SUCCESS,
    user
  }
}
