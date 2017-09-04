import { PipType } from './pip-type';
import { PipBonusGroup } from './pip-bonus-group';

export class PipBonus {

  name: string;
  pipType: PipType;
  bonusGroup: PipBonusGroup;

  constructor(name: string, pipType: PipType, bonusGroup: PipBonusGroup) {
    this.name = name;
    this.pipType = pipType;
    this.bonusGroup = bonusGroup;
  }
}
