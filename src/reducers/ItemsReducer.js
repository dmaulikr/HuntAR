import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { STORE_ITEM, CONSUME_ITEM, FORTIFY, REPAIR } from '../actions/InventoryActions';
import { SET_ITEMS } from '../actions/CharacterActions';

const initialState = [
  {
    bonusDamage: 50,
    name:"Machine Gun",
    type:"weapon",
    inventory:true,
    stored:false,
    weight: 10,
    consumed:false,
    id:11111112225327832768341674358974537764536743254523875423678649754532
  },
  {
    bonusDamage: 25,
    name:"Pistol",
    type:"weapon",
    inventory:true,
    stored:false,
    weight: 5,
    consumed:false,
    id:11111112225327832768341674358974537764
  },
  {
    bonusHealth: 50,
    name:"Tactical Helmet",
    type:"head",
    inventory:true,
    stored:false,
    weight: 10,
    consumed:false,
    id:111111122232768341674358974537764536743253678649754532678998765
  },

  {
    name:"Peanut Butter",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    consumed:false,
    healthBoost: 10,
    id:111111122327683416743578649754532678998765
  },
  {
    name:"Beer",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    consumed:false,
    healthBoost: 10,
    id:11111
  },
  {
    name:"Barb Wire",
    type:"Fortifications",
    healthBoost: 10,
    flavorText: "Barb wire should trip up some baddies.",
    inventory:true,
    stored:false,
    weight: 5,
    equipped: false,
    consumed: false,
    id: 4365375432567875543247898865432536275364367
  },
  {
    name:"Spikes",
    type:"Fortifications",
    healthBoost: 10,
    flavorText:"A good old fashioned spike pit.",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false,
    consumed: false,
    id: 43653789765378754362738952536275364367
  },
  {
    name:"Corrugated Metal",
    type:"Fortifications",
    healthBoost: 10,
    flavorText:"Some metal around the doors, hopefully this will stop them from getting kicked in",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false,
    consumed: false,
    id: 43653789765436367326273895898865364367
  },
]

function storeItem(items, storedItem) {
  return items.map((item, index) => {
      if (item.id === storedItem.id) {
        return Object.assign({}, item, {
          stored: !storedItem.stored
        })
      }
      return item
    })
}

function consumeItem(items, consumedItem) {
  return items.map((item, index) => {
      if (item.id === consumedItem.id) {
        return Object.assign({}, item, {
          consumed: true
        })
      }
      return item
    })
}

export default function items(state = initialState, action = {}) {
  switch(action.type) {
    case SEARCH_CURRENT_LOCATION:
      if (action.exploration.result.type === "ITEM") {
        return [...state, action.exploration.result.payload]
      }
      return [...state]
    case STORE_ITEM:
      return storeItem(state, action.item)
    case CONSUME_ITEM:
      return consumeItem(state, action.item)
    case FORTIFY:
      return consumeItem(state, action.item)
    case REPAIR:
      return consumeItem(state, action.item)
    case SET_ITEMS:
      return  [
        ...state,
        ...action.items,
      ]
    default:
      return state;
  }
}
