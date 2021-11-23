import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";

export class LevelGameState extends GameState {
  constructor(gsm: GameStateManager) {
    super("LevelGameState", gsm);
  }

  process(): Promise<void> {
    return Promise.resolve(undefined);
  }

}