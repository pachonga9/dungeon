import { v4 } from "uuid";
import { GameStateManager } from "../state/game-state-manager";
import { Consumable } from "./consumable";

export class MinorHealthPotion implements Consumable {
  id: string;
  label = "Minor Health Potion";
  servings = 2;

  constructor(private readonly gsm: GameStateManager) {
    this.id = v4();
  }

  use(): void {
    this.servings--;
    if (this.servings < 1) {
      console.log("this bottle is empty");
      return;
    }

    const amount = 5;
    const ps = this.gsm.playerState;

    ps.lifeTotal += amount;
    if (ps.lifeTotal > ps.lifeMax) {
      ps.lifeTotal = ps.lifeMax;
    }
  }
}
