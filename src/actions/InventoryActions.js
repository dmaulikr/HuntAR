export const STORE_ITEM = 'STORE_ITEM'
export const CONSUME_ITEM = 'CONSUME_ITEM'
export const SELECTED_ITEM = 'SELECTED_ITEM'
export const FORTIFY = 'FORTIFY'
export const REPAIR = 'REPAIR'
export const EQUIP_HELM = 'EQUIP_HELM'
export const EQUIP_WEP = 'EQUIP_WEP'
export const EQUIP_BODY = 'EQUIP_BODY'

export function equipHelm(item){
  return dispatch => {
   dispatch(dispatchEquipHelm(item));
  }
}

export function dispatchEquipHelm(item){
  return {
    type: EQUIP_HELM,
    item
  }
}
export function equipWep(item){
  return dispatch => {
   dispatch(dispatchEquipWep(item));
  }
}

export function dispatchEquipWep(item){
  return {
    type: EQUIP_WEP,
    item
  }
}
export function equipBody(item){
  return dispatch => {
   dispatch(dispatchEquipBody(item));
  }
}

export function dispatchEquipBody(item){
  return {
    type: EQUIP_BODY,
    item
  }
}
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
