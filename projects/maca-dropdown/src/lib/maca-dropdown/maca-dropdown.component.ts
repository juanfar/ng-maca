import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ContentChild, TemplateRef } from '@angular/core';
import { MacaSelectItem } from '../bean/maca-select-item';

@Component({
  selector: 'maca-dropdown',
  templateUrl: './maca-dropdown.component.html',
  styleUrls: ['./maca-dropdown.component.scss'],
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
      transition('visible => void', animate('195ms ease-in'))
    ])
  ]
})
export class MacaDropdownComponent implements OnInit {

  @ContentChild(TemplateRef, { static: false }) template: TemplateRef<any>;

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

    if (this.valueSelect) {
      this.preload();
    }

    this.optionsShow = this.options.slice(0);
  }

  preload() {
    const optionFound = this.options.find(option => option.value === this.valueSelect);
    if (optionFound) {
      this.valueShow = optionFound.label;
      this.selectItem(optionFound);
    }
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

  hidePanelItems() {
    this.showItems = false;
  }
}
