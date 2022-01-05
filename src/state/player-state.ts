import { Inventory } from "../items/inventory";
import { GameStateManager } from "./game-state-manager";

export class PlayerState {
  lifeMax = 100;
  lifeTotal = 95;
  currentRoomIndex = 0;
  farthestRoom = 0;
  lastRoom = 0;
  WeaponAttack = 0;
  inventory: Inventory;
  constructor(readonly gsm: GameStateManager) {
    this.inventory = new Inventory(gsm);
  }
}
