import { Storable } from "./storable";

export interface Weapon extends Storable {
  maxAttack: number;
  attack: () => number;
}
