import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MacaDropdownComponent } from './maca-dropdown/maca-dropdown.component';



@NgModule({
  declarations: [MacaDropdownComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MacaDropdownComponent]
})
export class MacaDropdownModule { }
