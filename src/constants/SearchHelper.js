import { d20 } from './Dice'
import * as MonsterHelper from './Monsters'

export default function searchHelper(){
  roll = d20()
  switch(true) {
    case roll < 5:
      return  {
        result: 'MONSTER',
        payload: MonsterHelper.randomMonster(MonsterHelper.MONSTERS)
    };
    case roll >= 5 && roll <= 10:
    return  {
      result: 'ITEM',
      payload: 'FINISH ME'
  };
    default:
      return {
        result: 'NOTHING'
    };
  }
}
