import { Inventory } from "./inventory-state";
import { Location } from "./location";

interface GameState {
  locations: Location[];
  currentLocation: number;
  inventory: Inventory;
  notDone: boolean;
}

export class DungeonGameState implements GameState {
  locations = [];
  currentLocation = 0;
  inventory = new Inventory();
  notDone = true;
}
