import { TestBed, inject } from '@angular/core/testing';

import { PipCalculatorService } from './pip-calculator.service';

describe('PipCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PipCalculatorService]
    });
  });

  it('should be created', inject([PipCalculatorService], (service: PipCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
