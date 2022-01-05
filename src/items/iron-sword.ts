import { v4 } from "uuid";
import { Weapon } from "./weapon";
import { GameStateManager } from "../state/game-state-manager";

export class IronSword implements Weapon {
  id: string;
  maxAttack: number = 10;
  label = "Iron Sword";

  constructor(private readonly gsm: GameStateManager) {
    this.id = v4();
  }

  attack(): number {
    return Math.floor(Math.random() * (this.maxAttack + 1));
    // return 10;
    // return this.getRandomInt();
    // return Math.floor(Math.random() * 11);
    // return this.rollAttackDmg(5, 10);
  }

  equip(): void {
    this.gsm.playerState.WeaponAttack = this.attack();
  }

  // rollAttackDmg: (min: number, max: number) => number {
  //     return Math.floor(Math.random() * (min, max) + min);
  // }
}
