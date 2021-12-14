import { Inventory } from "./inventory-state";
import { Location } from "./locations/location";

interface GameState {
  locations: Location[];
  currentLocation: number;
  lastLocation: number;
  farthestRoom: number;
  inventory: Inventory;
  notDone: boolean;
  playerLifeTotal: number;
}

export class DungeonGameState implements GameState {
  locations = [];
  currentLocation = 0;
  lastLocation = 0;
  farthestRoom = 0;
  inventory = new Inventory();
  notDone = true;
  playerLifeTotal = 500;
}
