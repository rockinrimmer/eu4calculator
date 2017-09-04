import { PipBonus } from './../../models/pip-bonus';
import { PipCalculatorService } from './../../services/pip-calculator.service';
import { PipDistribution } from './../../models/pip-distribution';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LeaderType } from '../../models/leader-type';

@Component({
  selector: 'app-pip-distribution',
  templateUrl: './pip-distribution.component.html',
  styleUrls: ['./pip-distribution.component.less']
})
export class PipDistributionComponent implements OnInit, OnChanges  {

  @Input()
  avgTotalPips: number;

  @Input()
  leaderType: LeaderType;

  @Input()
  pipBonuses: PipBonus[];

  avgPipDistribution: PipDistribution;
  typeFilenamePrefix = 'Land';

  constructor(private pipCalculatorService: PipCalculatorService) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    if ([LeaderType.Admiral, LeaderType.Explorer].includes(this.leaderType)) {
      this.typeFilenamePrefix = 'Naval';
    } else {
      this.typeFilenamePrefix = 'Land';
    }

    this.avgPipDistribution = this.pipCalculatorService.averagePipDistribution(
      this.avgTotalPips,
      (this.pipBonuses) ? this.pipBonuses : [],
      this.leaderType
    );
  }

}
