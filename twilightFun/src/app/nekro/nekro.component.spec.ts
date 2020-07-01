import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NekroComponent } from './nekro.component';

describe('NekroComponent', () => {
  let component: NekroComponent;
  let fixture: ComponentFixture<NekroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NekroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NekroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
