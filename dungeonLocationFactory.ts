import { Location } from "./location_Interface";
import { Outside } from "./loc_Outside";
import { MonsterRoom } from "./loc_MonsterRoom";
import { BossRoom } from "./loc_BossRoom";
import { TreasureRoom } from "./loc_TreasureRoom";
import { FinalRoom } from "./loc_FinalRoom";

export class DungeonLocationFactory {
  create(): Location[] {
    const locations: Location[];
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
