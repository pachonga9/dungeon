import { Location } from "./location";
import { Outside } from "./outside-location";
import { MonsterRoom } from "./monster-room-location";
import { BossRoom } from "./boss-room-location";
import { TreasureRoom } from "./treasure-room-location";
import { FinalRoom } from "./final-room-location";

export class LocationFactory {
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
