import { PipInputComponent } from './components/pip-input/pip-input.component';
import { PipOutputComponent } from './components/pip-output/pip-output.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdInputModule, MdRadioModule, MdCardModule, MdTooltipModule, MdCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaderPipsRouting } from './leader-pips.routing';
import { PipCalculatorService } from './services/pip-calculator.service';
import { PipDistributionComponent } from './components/pip-distribution/pip-distribution.component';
import { PipCalculatorComponent } from './components/pip-calculator/pip-calculator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LeaderPipsRouting,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdRadioModule,
    MdCardModule,
    MdTooltipModule,
    MdCheckboxModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PipCalculatorComponent,
    PipDistributionComponent,
    PipInputComponent,
    PipOutputComponent
  ],
  exports: [PipCalculatorComponent],
  providers: [PipCalculatorService]
})
export class LeaderPipsModule { }
