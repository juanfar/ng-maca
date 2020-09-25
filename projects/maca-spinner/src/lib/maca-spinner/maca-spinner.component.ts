import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MacaSpinnerService } from './maca-spinner.service';

@Component({
  selector: 'maca-spinner',
  templateUrl: './maca-spinner.component.html',
  styleUrls: ['./maca-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MacaSpinnerComponent implements OnInit {

  @Input() embedded: boolean;

  constructor(public macaSpinner: MacaSpinnerService) { }

  ngOnInit() {
  }

}
