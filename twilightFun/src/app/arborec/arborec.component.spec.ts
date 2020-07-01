import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArborecComponent } from './arborec.component';

describe('ArborecComponent', () => {
  let component: ArborecComponent;
  let fixture: ComponentFixture<ArborecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArborecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArborecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
