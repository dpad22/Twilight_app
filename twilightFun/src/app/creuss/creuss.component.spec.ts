import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreussComponent } from './creuss.component';

describe('CreussComponent', () => {
  let component: CreussComponent;
  let fixture: ComponentFixture<CreussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
