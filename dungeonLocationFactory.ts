import { Location } from "./location";
import { Outside } from "./locations/outside-location";
import { MonsterRoom } from "./locations/monster-room-location";
import { BossRoom } from "./locations/boss-room-location";
import { TreasureRoom } from "./locations/treasure-room-location";
import { FinalRoom } from "./locations/final-room-location";

export class DungeonLocationFactory {
  create(): Location[] {
    const locations: Location[] = [];
    locations.push(new Outside());
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
