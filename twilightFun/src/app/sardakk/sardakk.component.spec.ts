import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SardakkComponent } from './sardakk.component';

describe('SardakkComponent', () => {
  let component: SardakkComponent;
  let fixture: ComponentFixture<SardakkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SardakkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SardakkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
