export const ITEMS = [
  {
    bonusDamage: 50,
    name:"Machine Gun",
    type:"weapon",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false
  },
  {
    bonusDamage: 25,
    name:"Pistol",
    type:"weapon",
    inventory:true,
    stored:false,
    weight: 5,
    equipped: false
  },
  {
    bonusHealth: 50,
    name:"Tactical Helmet",
    type:"head",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false
  },
  {
    bonusHealth: 100,
    name:"Riot Gear",
    type:"body",
    inventory:true,
    stored:false,
    weight: 30,
    equipped: false
  },
  {
    bonusHealth: 10,
    name:"Rags",
    type:"body",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false
  },
  {
    name:"Canned Tuna",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false
  },
  {
    name:"Apple",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false
  },
  {
    name:"Water",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false
  },
  {
    name:"Beef Jerky",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false
  },
  {
    name:"Canned Corn",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false
  },
  {
    name:"Peanut Butter",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false
  },
  {
    name:"Beer",
    type:"Provisions",
    inventory:true,
    stored:false,
    weight: 1,
    equipped: false
  },
  {
    name:"Wood Planks",
    type:"Fortifications",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false
  },
  {
    name:"Barb Wire",
    type:"Fortifications",
    inventory:true,
    stored:false,
    weight: 5,
    equipped: false
  },
  {
    name:"Bricks",
    type:"Fortifications",
    inventory:true,
    stored:false,
    weight: 50,
    equipped: false
  },
  {
    name:"Spikes",
    type:"Fortifications",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false
  },
  {
    name:"Corrugated Metal",
    type:"Fortifications",
    inventory:true,
    stored:false,
    weight: 10,
    equipped: false
  },
  {
    name:"Razor Wire",
    type:"Fortifications",
    inventory:true,
    stored:false,
    weight: 5,
    equipped: false
  },
]




export function randomItem(items){
  item = items[Math.floor(Math.random()*items.length)];
  return item
}
