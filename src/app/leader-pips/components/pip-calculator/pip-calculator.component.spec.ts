import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipCalculatorComponent } from './pip-calculator.component';

describe('PipCalculatorComponent', () => {
  let component: PipCalculatorComponent;
  let fixture: ComponentFixture<PipCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
