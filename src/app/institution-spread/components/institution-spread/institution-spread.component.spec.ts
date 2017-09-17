import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionSpreadComponent } from './institution-spread.component';

describe('InstitutionSpreadComponent', () => {
  let component: InstitutionSpreadComponent;
  let fixture: ComponentFixture<InstitutionSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
