import { Location } from "../location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class BossRoom implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}

  getInput(): void {
    console.log(`You found the boss room!`);
    this.describeLocation();
  }

  describeLocation(): void {
    console.log(`It looks like a room where a boss should be!`);
  }
}
