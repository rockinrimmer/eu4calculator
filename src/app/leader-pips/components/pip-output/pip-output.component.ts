import { PipBonus } from './../../models/pip-bonus';
import { PipCalculatorService } from './../../services/pip-calculator.service';
import { PipDistribution } from './../../models/pip-distribution';
import { Component, OnInit, Input } from '@angular/core';
import { LeaderType } from '../../models/leader-type';

@Component({
  selector: 'app-pip-output',
  templateUrl: './pip-output.component.html',
  styleUrls: ['./pip-output.component.less']
})
export class PipOutputComponent implements OnInit {

  @Input()
  avgTotalPips: number;

  @Input()
  leaderType: LeaderType;

  @Input()
  minPips: number;

  @Input()
  maxPips: number;

  @Input()
  pipBonuses: PipBonus[];

  constructor(private pipCalculatorService: PipCalculatorService) { }

  ngOnInit() {
    this.avgTotalPips = this.pipCalculatorService.calculatePips(LeaderType.General, 0, 0, 0);
    this.minPips = this.pipCalculatorService.calculateMinPips(LeaderType.General, 0, 0, 0);
    this.maxPips = this.pipCalculatorService.calculateMaxPips(LeaderType.General, 0, 0, 0);
  }

}
