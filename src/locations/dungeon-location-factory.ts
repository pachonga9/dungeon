// import { stdin, stdout } from "process"; If I define rl in the gsm and pass it as a parameter to each location, I shouldn't need these.
// import * as readline from "readline";
// import { Interface } from "readline"; I guess I shouldn't need this either?
import { GameStateManager } from "../state/game-state-manager";
import { BossRoom } from "./boss-room-location";
import { MonsterRoom } from "./monster-room-location";
import { TreasureRoom } from "./treasure-room-location";
import { FinalRoom } from "./final-room-location";
import { Shop } from "./shop-location";
import { DungeonLocation } from "./dungeon-location";
import { Outside } from "./outside-location";

export class DungeonLocationFactory {
  constructor(private readonly gsm: GameStateManager) {}

  create(): DungeonLocation[] {
    console.log(`DLC: Yeah, yeah...I got it. BUILDING ROOMS...STBY.`);
    // need to figure out
    // const rl = readline.createInterface({
    //   input: stdin,
    //   output: stdout,
    // });
    const locations: DungeonLocation[] = [];
    locations.push(new Outside(this.gsm));
    locations.push(new MonsterRoom(this.gsm));
    locations.push(new MonsterRoom(this.gsm));
    locations.push(new BossRoom(this.gsm));
    locations.push(new TreasureRoom(this.gsm));
    locations.push(new MonsterRoom(this.gsm));
    locations.push(new MonsterRoom(this.gsm));
    locations.push(new FinalRoom(this.gsm));
    locations.push(new Shop(this.gsm));
    return locations;
  }
}
