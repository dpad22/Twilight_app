import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentakComponent } from './mentak.component';

describe('MentakComponent', () => {
  let component: MentakComponent;
  let fixture: ComponentFixture<MentakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
