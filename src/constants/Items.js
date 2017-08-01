import guid from './sudoGUID'

export const ITEMS = [
  {
    bonusDamage: 50,
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
    bonusDamage: 25,
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
    bonusHealth: 50,
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
    bonusHealth: 100,
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
    bonusHealth: 10,
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
    id: guid()
  },
  {
    name:"Apple",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    name:"Water",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    name:"Beef Jerky",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    name:"Canned Corn",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    name:"Peanut Butter",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    name:"Beer",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false,
    consumed: false,
    id: guid()
  },
  {
    name:"Wood Planks",
    type:"Fortifications",
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
