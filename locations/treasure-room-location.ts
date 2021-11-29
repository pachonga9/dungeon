import { Location } from "../location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class TreasureRoom implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}

  getInput(): void {
    console.log("You found the treasure room!");
    this.describeLocation();
  }

  describeLocation(): void {
    console.log(
      "It looks like this room was made to hold some treasure! Imagine that!"
    );
  }
}
