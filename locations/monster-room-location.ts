import { Location } from "../location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class MonsterRoom implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}

  getInput(): void {
    this.describeLocation();
    console.log("You found the monster room!");
  }

  describeLocation(): void {
    console.log(`In monster Room.`);
  }
}
