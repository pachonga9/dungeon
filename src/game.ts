import { GameStateManager } from "./state/game-state-manager";

export class Game {
  private gsm = new GameStateManager();

  async start(): Promise<void> {
    console.log("MAIN: Ignition. Let's do this. Starting stuff.");
    console.log(`MAIN: Dungeon Location Factory, pickup the phone...`);
    while (this.gsm.isDone === false) {
      const currentGameState = this.gsm.currentGameState;
      await currentGameState.run();
    }
  }
}
