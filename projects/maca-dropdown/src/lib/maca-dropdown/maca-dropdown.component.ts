import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MacaSelectItem } from '../bean/maca-select-item';

@Component({
  selector: 'maca-dropdown',
  templateUrl: './maca-dropdown.component.html',
  styleUrls: ['./maca-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MacaDropdownComponent implements OnInit {

  @Input() options: MacaSelectItem[] = [];
  @Input() valueSelect: any;
  @Input() labelNoresults = 'No results!';

  @Output() select: EventEmitter<MacaSelectItem>;

  public showItems: boolean;
  public optionsShow: MacaSelectItem[];
  public valueShow: string;

  constructor() {
    this.showItems = false;
    this.select =  new EventEmitter<MacaSelectItem>();
  }

  ngOnInit() {
    this.optionsShow = this.options.slice(0);
  }

  showPanelOptions() {
    this.showItems = !this.showItems;
  }

  filter(searchWord: string) {
    this.optionsShow = this.options.filter(option => option.label.toLowerCase().includes(searchWord.toLowerCase()));
  }

  selectItem(item: MacaSelectItem) {
    this.showItems = false;
    this.valueShow = item.label;
    this.select.emit(item);
  }
}
