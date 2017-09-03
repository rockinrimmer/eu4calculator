import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipOutputComponent } from './pip-output.component';

describe('PipOutputComponent', () => {
  let component: PipOutputComponent;
  let fixture: ComponentFixture<PipOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
