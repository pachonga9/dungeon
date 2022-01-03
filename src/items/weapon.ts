import { Storable } from "./storable";

export interface Weapon extends Storable {
  attack: () => number;
}
