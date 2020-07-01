import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1z1xComponent } from './l1z1x.component';

describe('L1z1xComponent', () => {
  let component: L1z1xComponent;
  let fixture: ComponentFixture<L1z1xComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1z1xComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1z1xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
