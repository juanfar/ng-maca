import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MacaToastService } from './maca-toast.service';

@Component({
  selector: 'maca-toast',
  templateUrl: './maca-toast.component.html',
  styleUrls: ['./maca-toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in')),
    ])
  ]
})
export class MacaToastComponent implements OnInit {

  @Input() timeOut: number;
 
  constructor(public toastService: MacaToastService) { }

  ngOnInit() {
    if(this.timeOut) {
      this.toastService.timeOut = this.timeOut;
    }
  }

}
