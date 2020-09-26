import { Component, OnInit } from '@angular/core';
import { MacaToastService } from 'maca-toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(private toastService: MacaToastService) { }

  ngOnInit() {
  }

  addInfo() {
    this.toastService.addInfoMessage('titulo', 'contenido');
  }

  addWarning() {
    this.toastService.addWarningMessage('titulo', 'contenido');
  }

  addError() {
    this.toastService.addErrorMessage('titulo', 'contenido')
  }

  addSuccess() {
    this.toastService.addSucessMessage('titulo', 'contenido')
  }
}
