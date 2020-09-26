import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MacaToastComponent } from './maca-toast/maca-toast.component';



@NgModule({
  declarations: [MacaToastComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [MacaToastComponent]
})
export class MacaToastModule { }
