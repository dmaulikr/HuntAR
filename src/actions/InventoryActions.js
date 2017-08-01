export const STORE_ITEM = 'STORE_ITEM'
export const CONSUME_ITEM = 'CONSUME_ITEM'
export const SELECTED_ITEM = 'SELECTED_ITEM'
export const FORTIFY = 'FORTIFY'
export const REPAIR = 'REPAIR'

export function storeItem(item){
  return dispatch => {
   dispatch(dispatchStoreItem(item));
  }
}

export function dispatchStoreItem(item){
  return {
    type: STORE_ITEM,
    item
  }
}

export function consumeItem(item){
  return dispatch => {
   dispatch(dispatchConsumeItem(item));
  }
}

export function dispatchConsumeItem(item){
  return {
    type: CONSUME_ITEM,
    item
  }
}

export function fortifyBase(item){
  return dispatch => {
   dispatch(dispatchFortifyBase(item));
  }
}

export function dispatchFortifyBase(item){
  return {
    type: FORTIFY,
    item
  }
}
export function repairBase(item){
  return dispatch => {
   dispatch(dispatchRepairBase(item));
  }
}

export function dispatchRepairBase(item){
  return {
    type: REPAIR,
    item
  }
}


//unused use later
