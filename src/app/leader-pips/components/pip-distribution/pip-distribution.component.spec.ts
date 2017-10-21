import {LeaderType} from '../../models/leader-type';
import { LAND_LEADERS } from './../../models/leader-type';
import { PipDistributionComponent } from './pip-distribution.component';
import { PipCalculatorComponent } from './../pip-calculator/pip-calculator.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatInputModule, MatRadioModule, MatCardModule,
   MatTooltipModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { LeaderPipsRouting } from './../../leader-pips.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared/shared.module';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PipInputComponent } from './../pip-input/pip-input.component';
import { PipOutputComponent } from './../pip-output/pip-output.component';
import {PipCalculatorService} from '../../services/pip-calculator.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('PipDistributionComponent', () => {
  let component: PipDistributionComponent;
  let fixture: ComponentFixture<PipDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
        LeaderPipsRouting,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatCardModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatTabsModule,
        FlexLayoutModule,
        BrowserAnimationsModule
      ],
      declarations: [
        PipCalculatorComponent,
        PipDistributionComponent,
        PipInputComponent,
        PipOutputComponent
      ],
      providers: [PipCalculatorService, {provide: APP_BASE_HREF, useValue : '/' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
