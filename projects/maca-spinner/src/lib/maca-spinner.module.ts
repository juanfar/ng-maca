import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MacaSpinnerComponent } from './maca-spinner/maca-spinner.component';



@NgModule({
  declarations: [MacaSpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [MacaSpinnerComponent]
})
export class MacaSpinnerModule { }
