import { PipType } from './pip-type';

export class PipBonus {

  name: string;
  pipType: PipType;

  constructor(name: string, pipType: PipType) {
    this.name = name;
    this.pipType = pipType;
  }
}
