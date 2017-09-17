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
  new Modifier('Center of Trade', 0),
  new Modifier('Produces Cloth/Cotton', 0),
  new Modifier('University', 0),
];

