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
  new PipBonus('Humanist-Quantity: Inspirational Leaders', PipType.Shock, PipBonusGroup.Policy, LAND_LEADERS),
  new PipBonus('Quantity-Exploration: Hired Adventurers', PipType.Maneuver, PipBonusGroup.Policy, LAND_LEADERS),
  new PipBonus('Innovative-Offensive: Modern Siege Weapons', PipType.Siege, PipBonusGroup.Policy, LAND_LEADERS),
  new PipBonus('Expansion-Quality: The Mining Act', PipType.Fire, PipBonusGroup.Policy, LAND_LEADERS),

  // Policies - Naval Leaders
  new PipBonus('Naval-Innovative: The Nautical Education Act', PipType.Fire, PipBonusGroup.Policy, NAVAL_LEADERS),
  new PipBonus('Naval-Religious: Zealous Captains', PipType.Shock, PipBonusGroup.Policy, NAVAL_LEADERS),
  new PipBonus('Innovative-Maritime: New Naval Tactics', PipType.Maneuver, PipBonusGroup.Policy, NAVAL_LEADERS),

  // Bonuses
  new PipBonus('Full Aristocracy', PipType.Siege, PipBonusGroup.Bonuses, LAND_LEADERS),

  // Country specific
  new PipBonus('Ming idea 7: The Red Cannon', PipType.Fire, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Rajput idea 6: Martial Ethos', PipType.Fire, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Smolenskian idea 5: Hold The Line', PipType.Fire, PipBonusGroup.Country, LAND_LEADERS),

  new PipBonus('Ajuuraan idea 6: Expelling the Infidel', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Arawak idea 7: Jungle Warfare', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Charruan idea 3: Bolas Warfare', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Chiba idea 5: Katori Jingu', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Hatakeyama idea 2: Indomitable Generals', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Horde idea 4: Steppe Leaders', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Jerusalem idea 5: Crusader Aristocracy', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Lithuanian idea 1: Warlord Dukes', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Mexican idea 6: Heroes of the Revolution', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Shan idea 5: Raiders', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Shoni idea 5: Bear of Hizen', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Tibetan idea 2: Bön Influence.', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Wallachian idea 5: Legacy of the Impaler', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Yamana idea 4: The Western Army', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),

  new PipBonus('Air idea 6: Nomadic Traditions', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Albanian idea 2: Land of Ambushers', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Caucasian idea 3: Hit and Run', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Kazani idea 5: Steppe Warfare', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Pacific Northwest idea 5: Legacy of Raven', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Permian idea 5: Warriors of the Taiga', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Romanian idea 2: Skilled Commanders', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Tapuian idea 5: The Way of the Jaguar', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Zaporozhian idea 4: Hit And Run', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS),

  new PipBonus('Nepali idea 7: Envelopment and Blockade', PipType.Siege, PipBonusGroup.Country, LAND_LEADERS),

  new PipBonus('Dutch idea 4: Instructie voor de Admiraliteiten', PipType.Fire, PipBonusGroup.Country, NAVAL_LEADERS, 2),

  new PipBonus('Mogadishan idea 2: Somali sailors', PipType.Maneuver, PipBonusGroup.Country, NAVAL_LEADERS),
  new PipBonus('Omani idea 6: Skilled Captains', PipType.Maneuver, PipBonusGroup.Country, NAVAL_LEADERS),
  new PipBonus('Swahili idea 2: Monsoon Season', PipType.Maneuver, PipBonusGroup.Country, NAVAL_LEADERS),


  new PipBonus('Bohemian ambition', PipType.Fire, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Utsunomiya ambition', PipType.Fire, PipBonusGroup.Country, LAND_LEADERS),


  new PipBonus('Air ambition', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Arabian ambition', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Manchu ambition', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),
  new PipBonus('Swedish ambition', PipType.Shock, PipBonusGroup.Country, LAND_LEADERS),

  new PipBonus('Shawnee ambition', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS, 2),
  new PipBonus('Lithuanian ambition', PipType.Maneuver, PipBonusGroup.Country, LAND_LEADERS)
].sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }

  if (a.name > b.name) {
    return 1;
  }

  return 0;
});
