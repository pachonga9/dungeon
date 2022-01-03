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
    // console.log(`DLC: Yeah, yeah...I got it. BUILDING ROOMS...STBY.`);
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
