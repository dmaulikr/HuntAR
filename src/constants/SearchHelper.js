import { d20 } from './Dice'
import * as MonsterHelper from './Monsters'
import * as ItemHelper from './Items'

export default function searchHelper(){
  roll = d20()
  switch(true) {
    case roll < 5:
      return  {
        type: 'MONSTER',
        payload: MonsterHelper.randomMonster(MonsterHelper.MONSTERS)
    };
    case roll >= 5 && roll <= 10:
    return  {
      type: 'ITEM',
      payload: ItemHelper.randomItem(ItemHelper.ITEMS)
  };
    default:
      return {
        type: 'NOTHING'
    };
  }
}
