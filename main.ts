import { DungeonGameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { DungeonLocationFactory } from "./dungeonLocationFactory";

const gs = new DungeonGameState();
// const gsm = new GameStateManager();
const locationFactory = new DungeonLocationFactory();

export class DungeonExperimental {
  // constructor(private readonly gsm = new GameStateManager()) {}

  async start(): Promise<void> {
    console.log("Building Rooms...");
    gs.locations = locationFactory.create();
    while (gs.notDone) {
      await this.runRoom();
    }
  }
  async runRoom(): Promise<void> {
    let i = gs.currentLocation;
    console.log(`according to main.ts the room you are in is ${i}.`);
    /// I figured since mains opinion of what gs.location is and the GSM opinion of what it is, maybe I should use the constructor
    /// to be on looking at the same thing. But this didn't work.
    let roomToRun = gs.locations[i];

    const input = await roomToRun.getInput();
    roomToRun.handleAnswer(input);
  }
}
