import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionOutputComponent } from './institution-output.component';

describe('InstitutionOutputComponent', () => {
  let component: InstitutionOutputComponent;
  let fixture: ComponentFixture<InstitutionOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
