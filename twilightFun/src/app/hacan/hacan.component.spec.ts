import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacanComponent } from './hacan.component';

describe('HacanComponent', () => {
  let component: HacanComponent;
  let fixture: ComponentFixture<HacanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
