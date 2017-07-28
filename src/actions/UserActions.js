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
