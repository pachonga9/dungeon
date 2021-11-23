import { GameStateId } from "./state/game-state-id";
import { GameStateManager } from "./state/game-state-manager";
import { GameStateManagerFactory } from "./state/game-state-manager-factory";

export class Game {
  private readonly gsm: GameStateManager;

  constructor(
    gsmFactory = new GameStateManagerFactory()) {
    this.gsm = gsmFactory.create();
  }

  start = async (): Promise<void> => {
    this.gsm.setCurrentStateWithId(GameStateId.intro);
    while (this.gsm.quit === false) {
      let currentState = this.gsm.currentState;
      await currentState.process();
    }
  };
}
