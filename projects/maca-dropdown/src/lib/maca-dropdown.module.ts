import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MacaClickOutsideModule } from 'maca-click-outside';
import { MacaDropdownComponent } from './maca-dropdown/maca-dropdown.component';



@NgModule({
  declarations: [MacaDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MacaClickOutsideModule
  ],
  exports: [MacaDropdownComponent]
})
export class MacaDropdownModule { }
