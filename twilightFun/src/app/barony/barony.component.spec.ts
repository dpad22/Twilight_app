import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaronyComponent } from './barony.component';

describe('BaronyComponent', () => {
  let component: BaronyComponent;
  let fixture: ComponentFixture<BaronyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaronyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaronyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
