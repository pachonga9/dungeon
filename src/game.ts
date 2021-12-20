import { GameStateManager } from "./state/game-state-manager";

export class Game {
  private gsm = new GameStateManager();

  async start(): Promise<void> {
    console.log("MAIN: Ignition. Let's do this. Starting stuff.");
    console.log(`MAIN: Dungeon Location Factory, pickup the phone...`);
    while (this.gsm.isNotDone) {
      const currentGameState = this.gsm.currentGameState;
      await currentGameState.run();
    }
  }
}

// const input = await currentGameState.getInput();
// currentGameState.handleAnswer(input);
// let i = this.gsm.gs.currentLocation;
// let i = this.psm.player.currentRoom;
// console.log(`MAIN: I see that the room you are in is in fact: ${i}.`);
// let roomToRun = this.gsm.dungeonGameState.locations[i];
// const input = await roomToRun.getInput();
// roomToRun.handleAnswer(input);

