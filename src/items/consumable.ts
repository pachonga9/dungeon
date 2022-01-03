import { Storable } from "./storable";

export interface Consumable extends Storable {
  servings: number;
  use: () => void;
}
