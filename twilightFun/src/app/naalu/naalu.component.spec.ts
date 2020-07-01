import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaaluComponent } from './naalu.component';

describe('NaaluComponent', () => {
  let component: NaaluComponent;
  let fixture: ComponentFixture<NaaluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaaluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
