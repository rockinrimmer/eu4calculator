import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionInputComponent } from './institution-input.component';

describe('InstitutionInputComponent', () => {
  let component: InstitutionInputComponent;
  let fixture: ComponentFixture<InstitutionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
