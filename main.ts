import { DungeonGameState } from "./game-state";
import { DungeonLocationFactory } from "./dungeonLocationFactory";

const gs = new DungeonGameState();
const locationFactory = new DungeonLocationFactory();

export class DungeonExperimental {
  start(): void {
    console.log("Building Rooms...");
    gs.player.locations = locationFactory.create();
    this.runRoom();
  }
  runRoom(): void {
    let i = gs.player.currentLocation;
    let roomToRun = gs.player.locations[i];
    roomToRun.getInput();
  }
}
