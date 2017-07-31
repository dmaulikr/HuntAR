export const STORE_ITEM = 'STORE_ITEM'

// logout

export function storeItem(){
  return dispatch => {
   dispatch(dispatchStoreItem());
  }
}

export function dispatchStoreItem(){
  return {
    type: STORE_ITEM
  }
}
