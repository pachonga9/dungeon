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
  create(): Location[] {
    const rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });
    const gsm = new GameStateManager();
    const locations: Location[] = [];
    locations.push(new Outside(rl, gsm));
    locations.push(new MonsterRoom());
    locations.push(new MonsterRoom());
    locations.push(new BossRoom());
    locations.push(new TreasureRoom());
    locations.push(new MonsterRoom());
    locations.push(new MonsterRoom());
    locations.push(new FinalRoom());
    return locations;
  }
}
