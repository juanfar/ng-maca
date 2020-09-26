import { Injectable } from '@angular/core';
import { MacaConstants } from './bean/maca-constants';
import { MacaToast } from './bean/maca-toast';

@Injectable({
  providedIn: 'root'
})
export class MacaToastService {

  private _toasts: MacaToast[];
  private _timeOut: number;

  public set timeOut(value: number) {
    this._timeOut = value;
  }

  public get toasts(): MacaToast[] {
    return this._toasts;
  }

  constructor() {
    this._toasts = [];
    this._timeOut = MacaConstants.TIMEOUT_DEFAULT;
  }

  addInfoMessage(title: string, message: string) {
    this.addMessage(title, message, MacaConstants.STATUS_INFO);
  }
  addWarningMessage(title: string, message: string) {
    this.addMessage(title, message, MacaConstants.STATUS_WARNING);
  }
  addErrorMessage(title: string, message: string) {
    this.addMessage(title, message, MacaConstants.STATUS_ERROR);
  }
  addSucessMessage(title: string, message: string) {
    this.addMessage(title, message, MacaConstants.STATUS_SUCCESS);
  }

  private addMessage(title: string, message: string, status: string) {
    let toast = new MacaToast(title, message, status);
    this._toasts.push(toast);

    console.log(this._timeOut);
    

    setTimeout(() => {
      this.closeToast(toast);
    }, this._timeOut);
  }

  closeToast(toast: MacaToast) {
    let index: number = this.toasts.findIndex(t => toast);
    this.toasts.splice(index, 1);
  }
}
