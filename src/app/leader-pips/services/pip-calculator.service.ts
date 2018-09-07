import { PipDistribution } from './../models/pip-distribution';
import { PipBonus } from './../models/pip-bonus';
import { Injectable } from '@angular/core';
import { LeaderType, LAND_LEADERS, NAVAL_LEADERS } from '../models/leader-type';
import { PipType } from '../models/pip-type';
import { DecimalPipe } from '@angular/common';

@Injectable()
export class PipCalculatorService {

  constructor(private decimalPipe: DecimalPipe) { }

  private readonly maxLandPips = 24;
  private readonly maxNavalPips = 18;
  private readonly maxPipsPerCategory = 6;
  private iterations = 10000;

  calculatePips(type: LeaderType, tradition: number, militarySkill: number, guarenteedPips: number): number {

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

      pips += guarenteedPips;

      if (pips > this.maxLandPips && LAND_LEADERS.includes(type)) {
        pips = this.maxLandPips;
      }

      if (pips > this.maxNavalPips && NAVAL_LEADERS.includes(type)) {
        pips = this.maxNavalPips;
      }

      sum += pips;
    }

    return sum / this.iterations;
  }

  calculateMaxPips(type: LeaderType, tradition: number, militarySkill: number, guarenteedPips: number): number {
    tradition = this.modifyTradition(type, tradition, militarySkill);

    let pips = 6 + Math.floor(tradition / 20);
    pips += tradition > 0 ? 1 : 0;
    pips += (tradition - 20) > 0 ? 1 : 0;
    pips += (tradition - 40) > 0 ? 1 : 0;
    pips += (tradition - 60) > 0 ? 1 : 0;
    pips += (tradition - 80) > 0 ? 1 : 0;
    pips += 1;

    pips += guarenteedPips;

    if (pips > this.maxLandPips && LAND_LEADERS.includes(type)) {
      return this.maxLandPips;
    }

    if (pips > this.maxNavalPips && NAVAL_LEADERS.includes(type)) {
      return this.maxNavalPips;
    }

    return pips;
  }

  calculateMinPips(type: LeaderType, tradition: number, militarySkill: number, guarenteedPips: number): number {

    tradition = this.modifyTradition(type, tradition, militarySkill);

    let pips = 1 + Math.floor(tradition / 20);
    pips += 100 <= tradition ? 1 : 0;

    pips += guarenteedPips;

    if (pips > this.maxLandPips && LAND_LEADERS.includes(type)) {
      return this.maxLandPips;
    }

    if (pips > this.maxNavalPips && NAVAL_LEADERS.includes(type)) {
      return this.maxNavalPips;
    }

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

    pipBonuses.filter(bonus => bonus.leaderTypes.includes(leaderType))
      .forEach(bonus => {
        switch (bonus.pipType) {
          case PipType.Fire:
            if (pipDistribution.fire < this.maxPipsPerCategory) {
              pipDistribution.fire++;
            }
            break;
          case PipType.Shock:
            if (pipDistribution.shock < this.maxPipsPerCategory) {
              pipDistribution.shock++;
              }
            break;
          case PipType.Maneuver:
          if (pipDistribution.maneuver < this.maxPipsPerCategory) {
              pipDistribution.maneuver++;
            }
            break;
          case PipType.Siege:
            if (pipDistribution.siege < this.maxPipsPerCategory) {
              pipDistribution.siege++;
            }
            break;
          default:
            break;
        }
      }
    );

    while (pips > 0) {
      const random = this.getRandomInt(0, 9);
      if (random === 0 && pipDistribution.siege < 6) {
        (pips >= 1 ) ? pipDistribution.siege++ : pipDistribution.siege += Number(this.decimalPipe.transform(pips, '1.0-1'));
      } else if (random < 4 && pipDistribution.shock < 6) {
        (pips >= 1 ) ? pipDistribution.shock++ : pipDistribution.shock += Number(this.decimalPipe.transform(pips, '1.0-1'));
      } else if (random < 7 && pipDistribution.fire < 6) {
        (pips >= 1 ) ? pipDistribution.fire++ : pipDistribution.fire += Number(this.decimalPipe.transform(pips, '1.0-1'));
      } else if (pipDistribution.maneuver < 6) {
        (pips >= 1 ) ? pipDistribution.maneuver++ : pipDistribution.maneuver += Number(this.decimalPipe.transform(pips, '1.0-1'));
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
