import { Component, OnInit } from '@angular/core';
import { MacaSelectItem } from 'maca-dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  options: MacaSelectItem[];

  constructor() { }

  ngOnInit() {
    this.options = [
      new MacaSelectItem('Label1', 'Value1'),
      new MacaSelectItem('Label2', 'Value2'),
      new MacaSelectItem('Label3', 'Value3'),
      new MacaSelectItem('Label4', 'Value4'),
    ]
  }

}
