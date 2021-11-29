import { DungeonGameState } from "./game-state";
import { DungeonLocationFactory } from "./dungeonLocationFactory";

const gs = new DungeonGameState();
const locationFactory = new DungeonLocationFactory();

export class DungeonExperimental {
  start(): void {
    console.log("Building Rooms...");
    gs.locations = locationFactory.create();
    this.runRoom();
  }
  runRoom(): void {
    let i = gs.currentLocation;
    let roomToRun = gs.locations[i];
    roomToRun.getInput();

    // let nexti = gs.player.currentLocation;
    // let nextRoomToRun = gs.player.locations[nexti];
    // roomToRun.getInput();
  }
}
