import { Inventory } from "../inventory/inventory";

export class PlayerState {
  maxHealth: number;
  currentHealth: number;
  farthestRoom: number;
  currentRoom: number;
  inventory: Inventory;
}