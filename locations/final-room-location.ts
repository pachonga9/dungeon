import { Location } from "../location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class FinalRoom implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}
  getInput(): void {
    console.log("You found the final room!");
    this.describeLocation();
  }

  describeLocation(): void {
    console.log("This room seems pretty final.");
  }
}
