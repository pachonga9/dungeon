// import { stdin, stdout } from "process";
// import * as readline from "readline";
///not used at the moment...
import { Location } from "./location";
import { DungeonLocationFactory } from "./dungeonLocationFactory";
import { CurrentLocation } from "./currentLocation";

const locationFactory = new DungeonLocationFactory();
const currentLocation = new CurrentLocation();

interface GameState {
  locations: Location[];
  // choices: string[];
  // monsterBlock: boolean;
  // monsterLifeTotal: number;
  // gold: number;
  // farthestRoom: number;
  // LifeTotal: number;
}

export class DungeonExperimental {
  player: GameState = {
    locations: [],
  };

  start(): void {
    console.log("Building Rooms...");
    this.player.locations = locationFactory.create();
    this.runGame();
  }
  runGame(): void {
    let i: number = currentLocation.currentLocationIndex;
    let roomToRun = this.player.locations[i];
    roomToRun.getInput();
  }
}
