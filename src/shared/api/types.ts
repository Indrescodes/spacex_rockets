export interface ISpacexRockets {
  id?: number;
  rocket_name: string;
  diameter: {
    meters: number;
  };
  height: {
    meters: number;
  };
  mass: {
    kg: number;
  };
  cost_per_launch: number;
}
