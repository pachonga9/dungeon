import * as readline from "readline";
import { stdin, stdout } from "process";
import { Location } from "./location";
import { Outside } from "./locations/outside-location";
import { MonsterRoom } from "./locations/monster-room-location";
import { BossRoom } from "./locations/boss-room-location";
import { TreasureRoom } from "./locations/treasure-room-location";
import { FinalRoom } from "./locations/final-room-location";
import { GameStateManager } from "./game-state-manager";

export class DungeonLocationFactory {
  constructor(private readonly gsm: GameStateManager) {}

  create(): Location[] {
    console.log(`DLC: Yeah, yeah...I got it. BUILDING ROOMS...STBY.`);
    const rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });
    const locations: Location[] = [];
    locations.push(new Outside(rl, this.gsm));
    locations.push(new MonsterRoom(rl, this.gsm));
    locations.push(new MonsterRoom(rl, this.gsm));
    locations.push(new BossRoom(rl, this.gsm));
    locations.push(new TreasureRoom(rl, this.gsm));
    locations.push(new MonsterRoom(rl, this.gsm));
    locations.push(new MonsterRoom(rl, this.gsm));
    locations.push(new FinalRoom(rl, this.gsm));
    return locations;
  }
}
