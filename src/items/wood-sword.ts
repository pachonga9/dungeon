import { v4 } from "uuid";
import { GameStateManager } from "../state/game-state-manager";
import { Weapon } from "./weapon";

export class WoodSword implements Weapon {
  id: string;
  maxAttack: number = 5;
  label = "Wood Sword";

  constructor(private readonly gsm: GameStateManager) {
    this.id = v4(); // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  }

  attack(): number {
    return Math.floor(Math.random() * (this.maxAttack + 1));
    // return 5; //todo replace with dice roll
  }
  equip(): void {
    this.gsm.playerState.WeaponAttack = this.attack();
    console.log(
      `You have equipped ${this.label}, it has a max attack of ${this.maxAttack}.`
    );
  }
}
