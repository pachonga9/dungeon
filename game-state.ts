import { Inventory } from "./inventory-state";
import { Location } from "./location";

interface GameState {
  locations: Location[];
  currentLocation: number;
  farthestRoom: number;
  inventory: Inventory;
  notDone: boolean;
  monsterBlock: boolean;
  monsterLifeTotal: number;
  playerLifeTotal: number;
}

export class DungeonGameState implements GameState {
  locations = [];
  currentLocation = 0;
  farthestRoom = 0;
  inventory = new Inventory();
  notDone = true;
  monsterBlock = false;
  monsterLifeTotal = 10;
  playerLifeTotal = 30;
}
