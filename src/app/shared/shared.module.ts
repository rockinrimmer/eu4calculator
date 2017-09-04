import { FilterListPipe } from './pipes/filter-list.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FilterListPipe],
  declarations: [FilterListPipe]
})
export class SharedModule { }
