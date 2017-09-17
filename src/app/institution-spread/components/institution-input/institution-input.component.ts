import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PROVINCE, CLIMATE, TERRAIN } from './../../models/modifier';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'institution-input',
  templateUrl: './institution-input.component.html',
  styleUrls: ['./institution-input.component.less']
})
export class InstitutionInputComponent implements OnInit {

  PROVINCE = PROVINCE;
  CLIMATE = CLIMATE;
  TERRAIN = TERRAIN;

  institutionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.institutionForm = this.formBuilder.group({
        provinceDevelopment: [, [Validators.min(0), Validators.pattern('\\d+')]],
        totalDevelopment: [, [Validators.min(0), Validators.pattern('\\d+')]]
      });
  }

  ngOnInit() {
  }

}
