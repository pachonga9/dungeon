import { Inventory } from "./inventory-state";

export interface GameState {
  getInput: () => Promise<string>;

  handleAnswer(answer: string);
}

export class MenuGameState implements GameState {
}

export class DungeonGameState implements GameState {
  locations = [];
  inventory = new Inventory();
  notDone = true;
}
