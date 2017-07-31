export const MONSTERS = [
  {
    health: 100,
    damage: 15,
    name:"Hellelephant",
    type:"Hellelephant",
    created:true
  },
  {
    health: 50,
    damage: 10,
    name:"Hellbunnny",
    type:"Hellbunnny",
    created:true
  },
  {
    health: 30,
    damage: 5,
    name:"Zombunny",
    type:"Zombunny",
    created:true
  },
  {
    health: 80,
    damage: 15,
    name:"Skeleton",
    type:"Skeleton",
    created:true
  },
  {
    health: 70,
    damage: 10,
    name:"Zombie",
    type:"Zombie",
    created:true
  },
]

export function randomMonster(monsters){
  monster = monsters[Math.floor(Math.random()*monsters.length)];
  return monster
}
