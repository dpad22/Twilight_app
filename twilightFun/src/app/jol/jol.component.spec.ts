import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JolComponent } from './jol.component';

describe('JolComponent', () => {
  let component: JolComponent;
  let fixture: ComponentFixture<JolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
