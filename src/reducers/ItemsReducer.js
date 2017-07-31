import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { STORE_ITEM } from '../actions/InventoryActions';


const initialState = [
  {
    bonusDamage: 50,
    name:"Machine Gun",
    type:"weapon",
    inventory:true,
    stored:false,
    weight: 10
  },
  {
    bonusDamage: 25,
    name:"Pistol",
    type:"weapon",
    inventory:true,
    stored:false,
    weight: 5
  },
  {
    bonusHealth: 50,
    name:"Tactical Helmet",
    type:"head",
    inventory:true,
    stored:false,
    weight: 10
  },
  {
    bonusHealth: 100,
    name:"Riot Gear",
    type:"body",
    inventory:true,
    stored:false,
    weight: 30
  },
  {
    name:"Beef Jerky",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1
  },
  {
    name:"Canned Corn",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1
  },
  {
    name:"Peanut Butter",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1
  },
  {
    name:"Beer",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1
  },
  {
    name:"Razor Wire",
    type:"Fortifications",
    inventory:true,
    stored:false,
    weight: 5
  },
]

function storeItem(items, itemId) {
  // return todos.map((todo, index) => {
  //     if (todo._id === updatedTodo.id) {
  //       // Copy the object before mutating
  //       return Object.assign({}, todo, {
  //         todo: updatedTodo.text
  //       })
  //     }
  //     return todo
  //   })
}

export default function items(state = initialState, action = {}) {
  switch(action.type) {
    case SEARCH_CURRENT_LOCATION:
      if (action.exploration.result.type === "ITEM") {
        return [...state, action.exploration.result.payload]
      }
      return [...state]
    case STORE_ITEM:
      return storeItem(state, action.id)
    default:
      return state;
  }
}
