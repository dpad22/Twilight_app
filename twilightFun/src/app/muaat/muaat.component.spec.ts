import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaatComponent } from './muaat.component';

describe('MuaatComponent', () => {
  let component: MuaatComponent;
  let fixture: ComponentFixture<MuaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
