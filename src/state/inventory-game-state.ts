import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";

export class InventoryGameState extends GameState {
  constructor(gsm: GameStateManager) {
    super("InventoryGameState", gsm);
  }

  process(): Promise<void> {
    return Promise.resolve(undefined);
  }

  protected canNext(next: GameState): boolean {
    return false;
  }

}