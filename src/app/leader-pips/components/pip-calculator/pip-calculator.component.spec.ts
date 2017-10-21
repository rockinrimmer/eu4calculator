import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatInputModule, MatRadioModule, MatCardModule,
   MatTooltipModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { LeaderPipsRouting } from './../../leader-pips.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared/shared.module';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipDistributionComponent } from './../pip-distribution/pip-distribution.component';
import { PipInputComponent } from './../pip-input/pip-input.component';
import { PipOutputComponent } from './../pip-output/pip-output.component';
import {PipCalculatorService} from '../../services/pip-calculator.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipCalculatorComponent } from './pip-calculator.component';

describe('PipCalculatorComponent', () => {
  let component: PipCalculatorComponent;
  let fixture: ComponentFixture<PipCalculatorComponent>;

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
    fixture = TestBed.createComponent(PipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
