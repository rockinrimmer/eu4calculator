import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipInputComponent } from './pip-input.component';

describe('PipInputComponent', () => {
  let component: PipInputComponent;
  let fixture: ComponentFixture<PipInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
