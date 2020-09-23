import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacaExampleComponent } from './maca-example.component';

describe('MacaExampleComponent', () => {
  let component: MacaExampleComponent;
  let fixture: ComponentFixture<MacaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacaExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
