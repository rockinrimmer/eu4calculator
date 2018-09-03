import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
   MatTabsModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstitutionInputComponent } from './components/institution-input/institution-input.component';
import { InstitutionOutputComponent } from './components/institution-output/institution-output.component';
import { InstitutionSpreadComponent } from './components/institution-spread/institution-spread.component';
import { InstitutionSpreadRouting } from './institution-spread.routing';
import { InstitutionSpreadService } from './services/institution-spread.service';

@NgModule({
  imports: [
    CommonModule,
    InstitutionSpreadRouting,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    InstitutionInputComponent,
    InstitutionOutputComponent,
    InstitutionSpreadComponent
  ],
  exports: [InstitutionSpreadComponent],
  providers: [InstitutionSpreadService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InstitutionSpreadModule { }
