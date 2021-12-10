import { Inventory } from "./inventory-state";
import { Location } from "./location";

interface GameState {
  locations: Location[];
  currentLocation: number;
  farthestRoom: number;
  inventory: Inventory;
  notDone: boolean;
  playerLifeTotal: number;
}

export class DungeonGameState implements GameState {
  locations = [];
  currentLocation = 0;
  farthestRoom = 0;
  inventory = new Inventory();
  notDone = true;
  playerLifeTotal = 500;
}
