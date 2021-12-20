import { stdin, stdout } from "process";
import * as readline from "readline";
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
    const rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });
    const locations: DungeonLocation[] = [];
    locations.push(new Outside(this.gsm, rl));
    locations.push(new MonsterRoom(this.gsm, rl));
    locations.push(new MonsterRoom(this.gsm, rl));
    locations.push(new BossRoom(this.gsm, rl));
    locations.push(new TreasureRoom(this.gsm, rl));
    locations.push(new MonsterRoom(this.gsm, rl));
    locations.push(new MonsterRoom(this.gsm, rl));
    locations.push(new FinalRoom(this.gsm, rl));
    locations.push(new Shop(this.gsm, rl));
    return locations;
  }
}
