import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XxchaComponent } from './xxcha.component';

describe('XxchaComponent', () => {
  let component: XxchaComponent;
  let fixture: ComponentFixture<XxchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XxchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XxchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
