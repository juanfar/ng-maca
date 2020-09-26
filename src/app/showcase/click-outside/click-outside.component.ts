import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-outside',
  templateUrl: './click-outside.component.html',
  styleUrls: ['./click-outside.component.css']
})
export class ClickOutsideComponent implements OnInit {

  showEstandar: boolean;
  showDelay: boolean;
  showDisabled: boolean;
  currentMode: string;

  constructor() {
    this.showEstandar = true;
    this.currentMode = 'estandar';
  }

  ngOnInit() {
  }

  clickOutside(event) {
    console.log(event);
  }

  openEstandar() {
    this.showEstandar = true;
    this.showDelay = false;
    this.showDisabled = false;
    this.currentMode = 'estandar';
  }

  openDelay() {
    this.showEstandar = false;
    this.showDelay = true;
    this.showDisabled = false;
    this.currentMode = 'delay';
  }

  openDisabled() {
    this.showEstandar = false;
    this.showDelay = false;
    this.showDisabled = true;
    this.currentMode = 'disabled';
  }

}
