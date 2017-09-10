import { LeaderType, LAND_LEADERS, NAVAL_LEADERS } from './leader-type';
import { PipType } from './pip-type';
import { PipBonusGroup } from './pip-bonus-group';

export class PipBonus {

  name: string;
  pipType: PipType;
  bonusGroup: PipBonusGroup;
  leaderTypes: LeaderType[];
  bonusAmount = 1;

  constructor(name: string, pipType: PipType, bonusGroup: PipBonusGroup, leaderTypes: LeaderType[], bonusAmount?: number) {
    this.name = name;
    this.pipType = pipType;
    this.bonusGroup = bonusGroup;
    this.leaderTypes = leaderTypes;
    if (bonusAmount) {
      this.bonusAmount = bonusAmount;
    }
  }
}

export const PIP_BONUSES: PipBonus[] = [
  // Ideas - Land Leaders
  new PipBonus('Offensive idea 1: Bayonet Leaders', PipType.Shock, PipBonusGroup.Ideas, LAND_LEADERS),
  new PipBonus('Offensive idea 3: Superior Firepower', PipType.Fire, PipBonusGroup.Ideas, LAND_LEADERS),
  new PipBonus('Defensive idea 3: Improved Maneuver', PipType.Maneuver, PipBonusGroup.Ideas, LAND_LEADERS),

  // Ideas - Naval Leaders
  new PipBonus('Naval idea 1: Boarding Parties', PipType.Shock, PipBonusGroup.Ideas, NAVAL_LEADERS),
  new PipBonus('Naval idea 3: Naval Cadets', PipType.Fire, PipBonusGroup.Ideas, NAVAL_LEADERS),
  new PipBonus('Maritime idea 6: Excellent Shipwrights', PipType.Maneuver, PipBonusGroup.Ideas, NAVAL_LEADERS, 2),

  // Policies - Land Leaders
  new PipBonus('Expansion-Quality: The Mining Act', PipType.Fire, PipBonusGroup.Policy, LAND_LEADERS)
];
