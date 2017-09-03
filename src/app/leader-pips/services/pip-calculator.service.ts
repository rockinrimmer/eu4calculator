import { PipDistribution } from './../models/pip-distribution';
import { PipBonus } from './../models/pip-bonus';
import { Injectable } from '@angular/core';
import { LeaderType } from '../models/leader-type';
import { PipType } from '../models/pip-type';

@Injectable()
export class PipCalculatorService {

  constructor() { }

  private iterations = 10000;
  private landLeaders = [
    LeaderType.General,
    LeaderType.Conquistador,
    LeaderType.Ruler,
    LeaderType.Heir
  ];

  calculatePips(type: LeaderType, tradition: number, militarySkill: number): number {

    let sum = 0;
    tradition = this.modifyTradition(type, tradition, militarySkill);

    for (let i = 0; i < this.iterations; i++) {
      let pips = 0;
      pips = this.getRandomInt(1, 6) + Math.floor(tradition / 20);
      pips += this.getRandomInt(1, 100) <= tradition ? 1 : 0;
      pips += this.getRandomInt(1, 100) <= (tradition - 20) ? 1 : 0;
      pips += this.getRandomInt(1, 100) <= (tradition - 40) ? 1 : 0;
      pips += this.getRandomInt(1, 100) <= (tradition - 60) ? 1 : 0;
      pips += this.getRandomInt(1, 100) <= (tradition - 80) ? 1 : 0;
      pips += this.getRandomInt(0, 1) === 1 ? 1 : 0;

      sum += pips;
    }

    return sum / this.iterations;
  }

  calculateMaxPips(type: LeaderType, tradition: number, militarySkill: number): number {
    tradition = this.modifyTradition(type, tradition, militarySkill);

    let pips = 6 + Math.floor(tradition / 20);
    pips += tradition > 0 ? 1 : 0;
    pips += (tradition - 20) > 0 ? 1 : 0;
    pips += (tradition - 40) > 0 ? 1 : 0;
    pips += (tradition - 60) > 0 ? 1 : 0;
    pips += (tradition - 80) > 0 ? 1 : 0;
    pips += 1;

    return pips;
  }

  calculateMinPips(type: LeaderType, tradition: number, militarySkill: number): number {

    tradition = this.modifyTradition(type, tradition, militarySkill);

    let pips = 1 + Math.floor(tradition / 20);
    pips += 100 <= tradition ? 1 : 0;

    return pips;
  }

  averagePipDistribution(pips: number, pipBonuses: PipBonus[], leaderType: LeaderType): PipDistribution {
    const pipDistribution = new PipDistribution();

    for (let i = 0; i < this.iterations; i++) {
      const currentDist = this.pipDistribution(pips, pipBonuses, leaderType);
      pipDistribution.fire += currentDist.fire;
      pipDistribution.shock += currentDist.shock;
      pipDistribution.maneuver += currentDist.maneuver;
      pipDistribution.siege += currentDist.siege;
    }

    pipDistribution.fire /= this.iterations;
    pipDistribution.shock /= this.iterations;
    pipDistribution.maneuver /= this.iterations;
    pipDistribution.siege /= this.iterations;

    return pipDistribution;
  }

  pipDistribution(pips: number, pipBonuses: PipBonus[], leaderType: LeaderType): PipDistribution {

    const pipDistribution = new PipDistribution();

    while (pips > 10) {
      pips -= 4;
      pipDistribution.fire++;
      pipDistribution.shock++;
      pipDistribution.maneuver++;
      pipDistribution.siege++;
    }

    pipBonuses.forEach(bonus => {
      switch (bonus.pipType) {
        case PipType.Fire:
          pipDistribution.fire++;
          break;
        case PipType.Shock:
          pipDistribution.shock++;
          break;
        case PipType.Maneuver:
          pipDistribution.maneuver++;
          break;
        case PipType.Siege:
          pipDistribution.siege++;
          break;
        default:
          break;
      }
    });

    while (pips > 0) {
      const random = this.getRandomInt(0, 9);

      if (random === 0 && this.landLeaders.includes(leaderType) && pipDistribution.siege < 6) {
        pipDistribution.siege++;
      } else if (random < 4 && pipDistribution.shock < 6) {
        pipDistribution.shock++;
      } else if (random < 7 && pipDistribution.fire < 6) {
        pipDistribution.fire++;
      } else if (pipDistribution.maneuver < 6) {
        pipDistribution.maneuver++;
      }

      pips--;
    }

    return pipDistribution;
  }

  /**
   * Get a random integer between `min` and `max`.
   *
   * @param {number} min - min number
   * @param {number} max - max number
   * @return {int} a random integer
   */
  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  modifyTradition(type: LeaderType, tradition: number, militarySkill: number): number {

    if ([LeaderType.Conquistador, LeaderType.Explorer].includes(type)) {
      tradition *= 0.8;
    } else if ([LeaderType.Ruler, LeaderType.Heir].includes(type)) {
      tradition = (tradition * 0.5) + (7 * militarySkill);
    }

    return tradition;
  }

}
