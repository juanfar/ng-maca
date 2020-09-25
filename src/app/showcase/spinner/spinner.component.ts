import { Component, OnInit } from '@angular/core';
import { MacaSpinnerService } from 'maca-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public embedded: boolean;

  constructor(private macaSpinner: MacaSpinnerService) {
    this.embedded = false;
  }

  ngOnInit() {
  }

  activarSpinner() {
    this.macaSpinner.showSpinner();

    setTimeout(() => {
      this.macaSpinner.hideSpinner();
    }, 3000);
  }

  cambiarModo() {
    this.embedded = !this.embedded;
    this.macaSpinner.hideSpinner();
  }

}
