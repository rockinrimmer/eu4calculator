import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipDistributionComponent } from './pip-distribution.component';

describe('PipDistributionComponent', () => {
  let component: PipDistributionComponent;
  let fixture: ComponentFixture<PipDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
