import { Interface } from "readline";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";

export class InventoryGameState extends GameState {
  constructor(gsm: GameStateManager, rl: Interface) {
    super("InventoryGameState", gsm, rl);
  }

  process(): Promise<void> {
    return Promise.resolve(undefined);
  }
}