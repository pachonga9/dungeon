import { Inventory } from "./inventory-state";
import { Location } from "../locations/location";

interface GameState {
  locations: Location[];
  inventory: Inventory;
  notDone: boolean;
}

export class DungeonGameState implements GameState {
  locations = [];
  inventory = new Inventory();
  notDone = true;
}
