import guid from './sudoGUID'

export const ITEMS = [
  {
    bonus: .5,
    name:"Machine Gun",
    type:"weapon",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    bonus: 1,
    name:"Pistol",
    type:"weapon",
    inventory:true,
    stored:false,
    weight: 5,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    bonus: 50,
    name:"Tactical Helmet",
    type:"head",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    bonus: 100,
    name:"Riot Gear",
    type:"body",
    inventory:true,
    stored:false,
    weight: 30,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    bonus: 10,
    name:"Rags",
    type:"body",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    name:"Canned Tuna",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid(),
    healthBoost: 10
  },
  {
    name:"Apple",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid(),
    healthBoost: 10
  },
  {
    name:"Water",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid(),
    healthBoost: 10
  },
  {
    name:"Beef Jerky",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid(),
    healthBoost: 10
  },
  {
    name:"Canned Corn",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid(),
    healthBoost: 10
  },
  {
    name:"Peanut Butter",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid(),
    healthBoost: 10
  },
  {
    name:"Beer",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid(),
    healthBoost: 10
  },
  {
    name:"Wood Planks",
    type:"Fortifications",
    healthBoost: 10,
    flavorText: "Wooden walls surround the boarder.",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false,
    consumed: false,
    id: guid()
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
    id: guid()
  },
  {
    name:"Bricks",
    type:"Fortifications",
    healthBoost: 10,
    flavorText: "The start of a decent brick wall, Could trip someone up?",
    inventory:true,
    stored:false,
    weight: 50,
    equipped: false,
    consumed: false,
    id: guid()
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
    id: guid()
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
    id: guid()
  },
  {
    name:"Razor Wire",
    type:"Fortifications",
    healthBoost: 10,
    flavorText: "Razor wire everywhere, ouch...",
    inventory:true,
    stored:false,
    weight: 5,
    equipped: false,
    consumed: false,
    id: guid()
  },
]



export function randomItem(items){
  item = items[Math.floor(Math.random()*items.length)];
  return item
  consumed: false
}
