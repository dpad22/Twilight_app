import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnuComponent } from './winnu.component';

describe('WinnuComponent', () => {
  let component: WinnuComponent;
  let fixture: ComponentFixture<WinnuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
