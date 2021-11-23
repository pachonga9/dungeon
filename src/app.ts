import { GameStateManager } from "./state/game-state-manager";
import { GameStateManagerFactory } from "./state/game-state-manager-factory";

export class Game {
  private readonly gsm: GameStateManager;

  constructor(gsmFactory = new GameStateManagerFactory()) {
    this.gsm = gsmFactory.create();
  }

  start = async (): Promise<void> => {
    let currentState = this.gsm.currentState;
    while (this.gsm.quit === false) {
      await currentState.process();
    }
  };
}
