import { Location } from "./location";
interface GameState {
  locations: Location[];
  currentLocation: number;
}

export class DungeonGameState {
  player: GameState = {
    locations: [],
    currentLocation: 0,
  };
}
