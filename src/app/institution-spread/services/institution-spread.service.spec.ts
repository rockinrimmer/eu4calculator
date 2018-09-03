import { TestBed, inject } from '@angular/core/testing';
import { InstitutionSpreadService } from './institution-spread.service';
describe('PipCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstitutionSpreadService]
    });
  });

  it('should be created', inject([InstitutionSpreadService], (service: InstitutionSpreadService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate institution increase', inject([InstitutionSpreadService], (service: InstitutionSpreadService) => {
    expect(service.calculateInstitutionIncrease(10)).toEqual(1.8326);
  }));

  it('should calculate development penalty', inject([InstitutionSpreadService], (service: InstitutionSpreadService) => {
    expect(service.calculateDevelopmentPenalty(10)).toEqual(3);
  }));

});
