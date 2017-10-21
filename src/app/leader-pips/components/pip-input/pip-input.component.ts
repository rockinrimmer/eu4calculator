import {PipType} from '../../models/pip-type';
import { PipBonus, PIP_BONUSES } from './../../models/pip-bonus';
import { PipDistribution } from './../../models/pip-distribution';
import { PipCalculatorService } from './../../services/pip-calculator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LeaderType, NAVAL_LEADERS, LAND_LEADERS } from '../../models/leader-type';
import { MatCheckboxChange } from '@angular/material/typings';
import { PipBonusGroup } from '../../models/pip-bonus-group';


@Component({
  selector: 'app-pip-input',
  templateUrl: './pip-input.component.html',
  styleUrls: ['./pip-input.component.less']
})
export class PipInputComponent implements OnInit {

  traditionForm: FormGroup;
  typesEnum = LeaderType;
  traditionName = 'Army Tradition';
  leaderTypes: LeaderType[] = [LeaderType.General,
                        LeaderType.Conquistador,
                        LeaderType.Admiral,
                        LeaderType.Explorer,
                        LeaderType.Ruler,
                        LeaderType.Heir];

  pipBonuses = PIP_BONUSES;
  selectedPipBonuses: PipBonus[] = [];
  pipBonusGroup = PipBonusGroup;
  guaranteedPips = 0;
  previousSelectedLeaderGroup = LAND_LEADERS;

  @Output()
  avgTotalPips = new EventEmitter<number>();

  @Output()
  minPips = new EventEmitter<number>();

  @Output()
  maxPips = new EventEmitter<number>();

  @Output()
  leaderType = new EventEmitter<LeaderType>();

  @Output()
  pipBonusesOutput = new EventEmitter<PipBonus[]>();

  constructor(private formBuilder: FormBuilder, private pipCalculatorService: PipCalculatorService) {
    this.traditionForm = this.formBuilder.group({
        tradition: [, [Validators.min(0), Validators.max(100), Validators.pattern('\\d+')]],
        selectedLeaderType: [0],
        militarySkill: [, [Validators.min(0), Validators.max(6), Validators.pattern('\\d+')]]
      });
  }

  ngOnInit() {

    this.traditionForm.valueChanges.subscribe(form => {

      if (LAND_LEADERS.includes(form.selectedLeaderType)) {
        this.traditionName = 'Army Tradition';
        if (this.previousSelectedLeaderGroup === NAVAL_LEADERS) {
          this.selectedPipBonuses = [];
          this.guaranteedPips = 0;
          this.previousSelectedLeaderGroup = LAND_LEADERS;
        }
      } else if (NAVAL_LEADERS.includes(form.selectedLeaderType)) {
        this.traditionName = 'Navy Tradition';
        if (this.previousSelectedLeaderGroup === LAND_LEADERS) {
          this.selectedPipBonuses = [];
          this.guaranteedPips = 0;
          this.previousSelectedLeaderGroup = NAVAL_LEADERS;
        }
      }

      if (this.traditionForm.valid) {
        this.emitData(form);
      }
    });

  }

  emitData(form) {
    this.avgTotalPips.emit(this.pipCalculatorService.calculatePips(
      form.selectedLeaderType, form.tradition, form.militarySkill, this.guaranteedPips));
    this.leaderType.emit(form.selectedLeaderType);
    this.minPips.emit(this.pipCalculatorService.calculateMinPips(
      form.selectedLeaderType, form.tradition, form.militarySkill, this.guaranteedPips));
    this.maxPips.emit(this.pipCalculatorService.calculateMaxPips(
      form.selectedLeaderType, form.tradition, form.militarySkill, this.guaranteedPips));
    this.pipBonusesOutput.emit(this.selectedPipBonuses);
  }

  addPipBonus(event: MatCheckboxChange ) {
    if (event.checked) {
      this.selectedPipBonuses.push(PIP_BONUSES.find(item => item.name === event.source.value));
    } else {
      this.selectedPipBonuses = this.selectedPipBonuses.filter(item => {
        return item.name !== PIP_BONUSES.find(findItem => findItem.name === event.source.value).name;
      });
    }
    this.guaranteedPips = this.calculateGuaranteedPips(this.traditionForm.getRawValue());
    this.emitData(this.traditionForm.getRawValue());
  }

  calculateGuaranteedPips(form): number {
    return this.selectedPipBonuses.filter(bonus => bonus.leaderTypes.includes(form.selectedLeaderType))
      .map(bonus => bonus.bonusAmount)
      .reduce((a, b) => a + b, 0);
  }

}
