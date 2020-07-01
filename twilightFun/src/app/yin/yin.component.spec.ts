import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YinComponent } from './yin.component';

describe('YinComponent', () => {
  let component: YinComponent;
  let fixture: ComponentFixture<YinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
