export class Modifier {

  name: string;
  private percentage: number;
  private calculation;

  constructor(name: string, percentage: number, calculation?: ModifierFunction) {
    this.name = name;
    this.percentage = percentage;
    this.calculation = calculation;
  }

  getPercentage(totalDevelopment?: number): number {
    if (totalDevelopment && this.calculation) {
      return this.calculation(this.percentage, totalDevelopment);
    }

    return this.percentage;
  }

}

type ModifierFunction = (percentage: number, totalDevelopment: number) => number;

export const CLIMATE = [
  new Modifier('Temperate', 0),
  new Modifier('Tropical', 15),
  new Modifier('Arid', 15),
  new Modifier('Artic', 50)
];

export const TERRAIN = [
  new Modifier('Farmlands', -5),
  new Modifier('Grasslands', 0),
  new Modifier('Drylands', +5),
  new Modifier('Woods', +15),
  new Modifier('Savannah', +15),
  new Modifier('Forest', +20),
  new Modifier('Steppe', +20),
  new Modifier('Highlands', +20),
  new Modifier('Coastal Desert', +25),
  new Modifier('Coastline', +25),
  new Modifier('Hills', +25),
  new Modifier('Marsh', +25),
  new Modifier('Desert', +35),
  new Modifier('Jungle', +35),
  new Modifier('Mountain', +50),
  new Modifier('Glacial', +50)
];

export const PROVINCE = [
  new Modifier('Capital', 0.05, (percentage: number, totalDevelopment: number): number => (totalDevelopment + percentage / -100)),
  new Modifier('Center of Trade', -5),
  new Modifier('Produces Cloth/Cotton', -10),
  new Modifier('University', -20),
];

export const RELIGION = [
  new Modifier('Protestant Aspect', -5),
  new Modifier('Fetish with Budist', -10),
];

export const ECONOMIC = [
  new Modifier('Trading in Tropical Wood', -5),
  new Modifier('Burghers(60+/60+)', -10),
];

export const HRE = [
  new Modifier('Call for Reichsreform', -5),
  new Modifier('Free City', -10),
];

export const POLITICAL = [
  new Modifier('Has Renaissance', -5),
  new Modifier('Land Reform(Parliament)', -10),
];

export const COUNTRY = [
  new Modifier('Primitive Nation', 50),
  new Modifier('Vassal/March/Client State', 50),
];
