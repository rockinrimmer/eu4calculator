import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstitutionSpreadRouting } from './institution-spread.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionInputComponent } from './components/institution-input/institution-input.component';
import { InstitutionOutputComponent } from './components/institution-output/institution-output.component';
import { InstitutionSpreadComponent } from './components/institution-spread/institution-spread.component';
import { MdTabsModule, MdCheckboxModule, MdTooltipModule, MdCardModule,
  MdRadioModule, MdInputModule, MdButtonModule, MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    InstitutionSpreadRouting,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdRadioModule,
    MdCardModule,
    MdTooltipModule,
    MdCheckboxModule,
    MdTabsModule,
    MdSelectModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    InstitutionInputComponent,
    InstitutionOutputComponent,
    InstitutionSpreadComponent
  ],
  exports: [InstitutionSpreadComponent]
})
export class InstitutionSpreadModule { }
