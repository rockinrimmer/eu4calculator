import {LeaderType} from '../models/leader-type';
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

  it('should not modify the tradition of Generals and Admirals', inject([PipCalculatorService], (service: PipCalculatorService) => {
    expect(service.modifyTradition(LeaderType.General, 10, 0)).toEqual(10);
    expect(service.modifyTradition(LeaderType.Admiral, 10, 0)).toEqual(10);
  }));

  it('should modify the tradition Conquistadors and Explorers', inject([PipCalculatorService], (service: PipCalculatorService) => {
    expect(service.modifyTradition(LeaderType.Conquistador, 10, 0)).toEqual(8);
    expect(service.modifyTradition(LeaderType.Explorer, 10, 0)).toEqual(8);
  }));

  it('should modify the tradition of Rulers and Heirs depending on military skill',
  inject([PipCalculatorService], (service: PipCalculatorService) => {
    expect(service.modifyTradition(LeaderType.Ruler, 100, 1)).toEqual(57);
    expect(service.modifyTradition(LeaderType.Heir, 100, 1)).toEqual(57);
    expect(service.modifyTradition(LeaderType.Ruler, 100, 3)).toEqual(71);
    expect(service.modifyTradition(LeaderType.Heir, 100, 3)).toEqual(71);
  }));
});
