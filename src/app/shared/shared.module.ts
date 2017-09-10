import { FilterListPipe } from './pipes/filter-list.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListAttributeListPipe } from './pipes/filter-list-attribute-list.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FilterListPipe, FilterListAttributeListPipe],
  declarations: [FilterListPipe, FilterListAttributeListPipe]
})
export class SharedModule { }
