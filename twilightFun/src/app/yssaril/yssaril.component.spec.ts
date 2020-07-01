import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YssarilComponent } from './yssaril.component';

describe('YssarilComponent', () => {
  let component: YssarilComponent;
  let fixture: ComponentFixture<YssarilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YssarilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YssarilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
