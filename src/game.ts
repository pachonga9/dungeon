import { GameStateManager } from "./state/game-state-manager";
import { GameStateManagerFactory } from "./state/game-state-manager-factory";

export class Game {
  private readonly gsm: GameStateManager;

  constructor(
    gsmFactory = new GameStateManagerFactory()) {
    this.gsm = gsmFactory.create();
  }

  start = async (): Promise<void> => {
    while (this.gsm.quit === false) {
      let currentState = this.gsm.currentState;
      console.clear();
      await currentState.process();
    }
  };
}
