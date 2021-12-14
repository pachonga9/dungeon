import { DungeonGameState } from "./game-state";

export class GameStateManager {
  constructor(public readonly gs = new DungeonGameState()) {}
}
