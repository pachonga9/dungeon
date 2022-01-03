import { v4 } from "uuid";
import { Weapon } from "./weapon";

export class WoodSword implements Weapon {
  id: string;
  label: "Wood Sword";

  constructor() {
    this.id = v4(); // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  }

  attack(): number {
    return 5; //todo replace with dice roll
  }
}
