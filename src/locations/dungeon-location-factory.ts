import { stdin, stdout } from "process";
import * as readline from "readline";
import { GameStateManager } from "../state/game-state-manager";
import { BossRoom } from "./boss-room-location";
import { DungeonLocation } from "./dungeon-location";
import { Outside } from "./outside-location";

export class DungeonLocationFactory {
  constructor(private readonly gsm: GameStateManager) {
  }

  create(): DungeonLocation[] {
    console.log(`DLC: Yeah, yeah...I got it. BUILDING ROOMS...STBY.`);
    const rl = readline.createInterface({
      input: stdin,
      output: stdout
    });
    const locations: DungeonLocation[] = [];
    locations.push(new Outside(this.gsm, rl));
    // locations.push(new MonsterRoom(rl, this.gsm);
    // locations.push(new MonsterRoom(rl, this.gsm);
    locations.push(new BossRoom(this.gsm, rl));
    // locations.push(new TreasureRoom(rl, this.gsm));
    // locations.push(new MonsterRoom(rl, this.gsm);
    // locations.push(new MonsterRoom(rl, this.gsm);
    // locations.push(new FinalRoom(rl, this.gsm);
    // locations.push(new Shop(rl, this.gsm);
    // locations.push(new Menu(rl, this.gsm);
    return locations;
  }
}
