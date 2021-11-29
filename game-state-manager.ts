import { DungeonGameState } from "./game-state";

export class GameStateManager {
  constructor(public readonly gs = new DungeonGameState()) {}

  moveUp(): void {
    this.gs.currentLocation += 1;
    console.log(
      "I am the Game State Manager. I just told the gamestate current location to go up one."
    );
    console.log(
      `The following number represents the gamestate's current location and should now say 1. Here is what it says: ${this.gs.currentLocation}`
    );
  }
}
