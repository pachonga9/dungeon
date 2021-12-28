import { InventoryGameState } from "./inventory-state";
import { GameStateManager } from "./game-state-manager";

export class PlayerState {
  lifeTotal = 100;
  currentRoomIndex = 0;
  farthestRoom = 0;
  lastRoom = 0;
  // inventory = new InventoryGameState(gsm);
}
