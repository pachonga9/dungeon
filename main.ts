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
  current: number;
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
    current: 0,
  };

  start(): void {
    console.log("Building Rooms...");
    this.player.locations = locationFactory.create();
    this.runRoom();
  }
  runRoom(): void {
    this.player.current = currentLocation.currentLocationIndex;
    let i = this.player.current;
    let roomToRun = this.player.locations[i];
    roomToRun.getInput();

    // let i: number = currentLocation.currentLocationIndex;
    // let roomToRun = this.player.locations[i];
    // roomToRun.getInput();
  }
}
