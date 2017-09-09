export enum LeaderType {
  General,
  Conquistador,
  Admiral,
  Explorer,
  Ruler,
  Heir
}

export const LAND_LEADERS = [
  LeaderType.General,
  LeaderType.Conquistador,
  LeaderType.Ruler,
  LeaderType.Heir
];

export const NAVAL_LEADERS = [
  LeaderType.Admiral,
  LeaderType.Explorer
];
