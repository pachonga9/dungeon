import { Inventory } from "./inventory-state";

export class PlayerState {
  lifeTotal = 100;
  currentRoomIndex = 0;
  farthestRoom = 0;
  lastRoom = 0;
  inventory = new Inventory();
}
