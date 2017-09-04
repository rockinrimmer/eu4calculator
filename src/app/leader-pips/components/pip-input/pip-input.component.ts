import {PipType} from '../../models/pip-type';
import { PipBonus } from './../../models/pip-bonus';
import { PipDistribution } from './../../models/pip-distribution';
import { PipCalculatorService } from './../../services/pip-calculator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LeaderType } from '../../models/leader-type';
import { MdCheckboxChange } from '@angular/material/typings';
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

  pipBonuses: PipBonus[] = [
    new PipBonus('Offensive idea 1: Bayonet Leaders', PipType.Shock, PipBonusGroup.Ideas),
    new PipBonus('Offensive idea 3: Superior Firepower', PipType.Fire, PipBonusGroup.Ideas),
    new PipBonus('Expansion-Quality: The Mining Act', PipType.Fire, PipBonusGroup.Policy)
  ];
  selectedPipBonuses: PipBonus[] = [];
  pipBonusGroup = PipBonusGroup;

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
        tradition: [, Validators.max(100)],
        selectedLeaderType: [0],
        militarySkill: [, [Validators.min(0), Validators.max(6)]]
      });
  }

  ngOnInit() {

    this.traditionForm.valueChanges.subscribe(form => {
      if ([LeaderType.General, LeaderType.Conquistador, LeaderType.Ruler, LeaderType.Heir].includes(form.selectedLeaderType)) {
        this.traditionName = 'Army Tradition';
      } else if ([LeaderType.Admiral, LeaderType.Explorer].includes(form.selectedLeaderType)) {
        this.traditionName = 'Navy Tradition';
      }

      this.emitData(form);
    });

  }

  emitData(form) {
    console.log(form);
    this.avgTotalPips.emit(this.pipCalculatorService.calculatePips(
      form.selectedLeaderType, form.tradition, form.militarySkill, this.selectedPipBonuses.length));
    this.leaderType.emit(form.selectedLeaderType);
    this.minPips.emit(this.pipCalculatorService.calculateMinPips(
      form.selectedLeaderType, form.tradition, form.militarySkill, this.selectedPipBonuses.length));
    this.maxPips.emit(this.pipCalculatorService.calculateMaxPips
      (form.selectedLeaderType, form.tradition, form.militarySkill, this.selectedPipBonuses.length));
    this.pipBonusesOutput.emit(this.selectedPipBonuses);
  }

  addPipBonus(event: MdCheckboxChange ) {
    if (event.checked) {
      this.selectedPipBonuses.push(this.pipBonuses.find(item => item.name === event.source.value));
    } else {
      this.selectedPipBonuses = this.selectedPipBonuses.filter(item => {
        return item.name !== this.pipBonuses.find(findItem => findItem.name === event.source.value).name;
      });
    }

    this.emitData(this.traditionForm.getRawValue());
  }

}
