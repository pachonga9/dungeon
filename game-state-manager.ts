import { DungeonGameState } from "./game-state";

export class GameStateManager {
  constructor(public readonly gs = new DungeonGameState()) {}

  moveUp(): void {
    this.gs.currentLocation += 1;
    // this.endInstance();
    console.log(
      "GSM: I just told the gamestate current location to go up one."
    );
    console.log(
      `GSM: The gamestate's current location and should now say 1. Here is what it says: ${this.gs.currentLocation}`
    );
  }
  // endInstance(): void {
  //   this.gs.instanceNotComplete = true;
  // }
  // beginInstance(): void {
  //   this.gs.instanceNotComplete = false;
  // }
}
