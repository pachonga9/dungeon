import { DungeonGameState } from "./game-state";

export class GameStateManager {
  public isNotDone = false;

  constructor(public readonly dungeonGameState = new DungeonGameState()) {
  }
}
