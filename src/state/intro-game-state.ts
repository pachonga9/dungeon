import { GameState } from "./game-state";
import { GameStateId } from "./game-state-id";
import { GameStateManager } from "./game-state-manager";

export class IntroGameState extends GameState {
  constructor(gsm: GameStateManager) {
    super("IntroGameState", gsm);
  }

  process(): Promise<void> {
    return new Promise((resolve) => {
      console.log("Welcome to the Dungeon Game");
      return this.rl.question("Press any key to Begin", () => {
        this.next(GameStateId.levels);
        resolve();
      });
    });
  }
}