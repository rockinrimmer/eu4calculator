import { Injectable } from '@angular/core';

@Injectable()
export class InstitutionSpreadService {

  calculateInstitutionIncrease(development: number): number {
    return (development + 1) * 0.1666;
  }

  calculateDevelopmentPenalty(development: number): number {
    const newDev = development / 10;
    return ((5 * newDev - 4) + development - 10 - ((newDev - 1 ) * 10)) * (3 * newDev);
  }

}
