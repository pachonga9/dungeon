import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";

export class IntroGameState extends GameState {
  constructor(gsm: GameStateManager) {
    super("IntroGameState", gsm);
  }

  process(): Promise<void> {
    return new Promise(function(resolve) {
      console.log("Welcome to the Dungeon Game");
      const asdf = "asdf";
      return this.rl.question("Press any key to Begin", () => {
        console.log(asdf);
        resolve();
      });
    });
  }
}