import { GameStateManager } from "../state/game-state-manager";
import { PlayerState } from "../state/player-state";
import { BossRoom } from "./boss-room-location";
import { FinalRoom } from "./final-room-location";
import { Location } from "./location";
import { MonsterRoom } from "./monster-room-location";
import { Outside } from "./outside-location";
import { TreasureRoom } from "./treasure-room-location";

export class LocationFactory {
  create(playerState: PlayerState, gsm: GameStateManager): Location[] {
    const locations: Location[] = [];
    locations.push(new Outside(playerState, gsm));
    locations.push(new MonsterRoom(5, playerState, gsm));
    locations.push(new MonsterRoom(8, playerState, gsm));
    locations.push(new BossRoom(playerState, gsm));
    locations.push(new TreasureRoom(playerState, gsm));
    locations.push(new MonsterRoom(13, playerState, gsm));
    locations.push(new MonsterRoom(21, playerState, gsm));
    locations.push(new BossRoom(playerState, gsm));
    locations.push(new FinalRoom(playerState, gsm));
    return locations;
  }
}
