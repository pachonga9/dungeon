import { Inventory } from "./inventory-state";
import { Location } from "./location";

interface GameState {
  locations: Location[];
  currentLocation: number;
  inventory: Inventory;
}

export class DungeonGameState implements GameState {
  locations = [];
  currentLocation = 0;
  inventory = new Inventory();
}
