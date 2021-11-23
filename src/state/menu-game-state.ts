import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";

export class MenuGameState extends GameState {
  constructor(gsm: GameStateManager) {
    super("MenuGameState", gsm);
  }

  process(): Promise<void> {
    return Promise.resolve(undefined);
  }

}