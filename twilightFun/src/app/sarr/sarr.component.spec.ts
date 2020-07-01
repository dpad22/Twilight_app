import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarrComponent } from './sarr.component';

describe('SarrComponent', () => {
  let component: SarrComponent;
  let fixture: ComponentFixture<SarrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
