import { PipBonus } from './../../models/pip-bonus';
import { Component, OnInit } from '@angular/core';
import { LeaderType } from '../../models/leader-type';

@Component({
  selector: 'app-pip-calculator',
  templateUrl: './pip-calculator.component.html',
  styleUrls: ['./pip-calculator.component.less']
})
export class PipCalculatorComponent implements OnInit {

  avgTotalPips: number;
  minPips: number;
  maxPips: number;
  leaderType: LeaderType;
  pipBonuses: PipBonus[];

  constructor() {}

  ngOnInit() {

    this.avgTotalPips = 0;
    this.minPips = 0;
    this.maxPips = 0;
    this.leaderType = LeaderType.General;

  }

  setAvgTotalPips(event) {
    this.avgTotalPips = event;
  }

  setLeaderType(event) {
    this.leaderType = event;
  }

  setMinPips(event) {
    this.minPips = event;
  }

  setMaxPips(event) {
    this.maxPips = event;
  }

  setPipBonuses(event) {
    this.pipBonuses = event;
  }

}
