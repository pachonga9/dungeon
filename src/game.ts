import { DungeonGameState } from "./state/game-state";
import { GameStateManager } from "./state/game-state-manager";
import { DungeonLocationFactory } from "./locations/dungeonLocationFactory";

export class DungeonExperimental {
  private gsm = new GameStateManager();
  private locationFactory = new DungeonLocationFactory(this.gsm);

  async start(): Promise<void> {
    console.log("MAIN: Ignition. Let's do this. Starting stuff.");
    console.log(`MAIN: Dungeon Location Factory, pickup the phone...`);
    this.gsm.gs.locations = this.locationFactory.create();
    while (this.gsm.gs.notDone) {
      await this.runRoom();
    }
  }
  async runRoom(): Promise<void> {
    let i = this.gsm.gs.currentLocation;
    console.log(`MAIN: I see that the room you are in is in fact: ${i}.`);
    let roomToRun = this.gsm.gs.locations[i];
    const input = await roomToRun.getInput();
    roomToRun.handleAnswer(input);
  }
}