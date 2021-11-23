import { Inventory } from "../inventory/inventory";

export class PlayerState {
  maxHealth = 50;
  currentHealth = 50;
  farthestRoom = 0;
  currentRoom = 0;
  inventory = new Inventory();
}