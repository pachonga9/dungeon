import { DungeonLocationFactory } from "./locations/dungeonLocationFactory";
import { GameStateManager } from "./state/game-state-manager";
import { PlayerStateManager } from "./state/player-state-manager";

export class DungeonExperimental {
  private gsm = new GameStateManager();
  private psm = new PlayerStateManager();
  private locationFactory = new DungeonLocationFactory(this.gsm, this.psm);

  async start(): Promise<void> {
    console.log("MAIN: Ignition. Let's do this. Starting stuff.");
    console.log(`MAIN: Dungeon Location Factory, pickup the phone...`);
    this.gsm.dungeonGameState.locations = this.locationFactory.create();
    while (this.gsm.isNotDone) {
      await this.runState();
      //await this.runRoom();
    }
  }

  async runState(): Promise<void> {
    const currentGameState = this.gsm.currentGameState;
    const input = await currentGameState.getInput();
    currentGameState.handleAnswer(input);
    // let i = this.gsm.gs.currentLocation;
    // let i = this.psm.player.currentRoom;
    // console.log(`MAIN: I see that the room you are in is in fact: ${i}.`);
    // let roomToRun = this.gsm.dungeonGameState.locations[i];
    // const input = await roomToRun.getInput();
    // roomToRun.handleAnswer(input);
  }
}
