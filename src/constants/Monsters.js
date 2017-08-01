import guid from './sudoGUID'

export const MONSTERS = [
  {
    health: 100,
    damage: 15,
    name:"Hellelephant",
    type:"Hellelephant",
    created:true,
    id: guid()
  },
  {
    health: 50,
    damage: 10,
    name:"Hellbunnny",
    type:"Hellbunnny",
    created:true,
    id: guid()
  },
  {
    health: 30,
    damage: 5,
    name:"Zombunny",
    type:"Zombunny",
    created:true,
    id: guid()
  },
  {
    health: 80,
    damage: 15,
    name:"Skeleton",
    type:"Skeleton",
    created:true,
    id: guid()
  },
  {
    health: 70,
    damage: 10,
    name:"Zombie",
    type:"Zombie",
    created:true,
    id: guid()
  },
]

export function randomMonster(monsters){
  monster = monsters[Math.floor(Math.random()*monsters.length)];
  return monster
}
