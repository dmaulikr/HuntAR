import { SEARCH_CURRENT_LOCATION } from '../actions/GeoActions';
import { STORE_ITEM } from '../actions/InventoryActions';


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
    bonusHealth: 100,
    name:"Riot Gear",
    type:"body",
    inventory:true,
    stored:false,
    weight: 30,
    consumed:false,
    id:1111122253243589745377645367432545238754232678998765
  },
  {
    name:"Beef Jerky",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    consumed:false,
    id:111111122232768341674358536743254523849754532678998765
  },
  {
    name:"Canned Corn",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    consumed:false,
    id:111111122253278374358974537764536423532678998765
  },
  {
    name:"Peanut Butter",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    consumed:false,
    id:111111122327683416743578649754532678998765
  },
  {
    name:"Beer",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    consumed:false,
    id:11111
  },
  {
    name:"Razor Wire",
    type:"Fortifications",
    inventory:true,
    stored:false,
    weight: 5,
    consumed:false,
    id:111116736743255424532678998765
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
