import { Location } from "./location";
import { GameStateManager } from "../state/game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class Menu implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}

  getInput(): Promise<string> {
    this.describeLocation();
    console.log(`1. Resume Game`);
    console.log(`2. Open Inventory`);
    console.log(`3. Exit Game`);
    return new Promise((resolve, reject) => {
      this.rl.question(
        "What would you like to do? ",
        (answer: string): void => {
          console.log(`You answered ${answer}`);
          resolve(answer);
        }
      );
    });
  }

  describeLocation(): void {
    console.log("MAIN MENU");
  }

  private resume(): void {
    this.gsm.gs.currentLocation = this.gsm.gs.lastLocation;
    return;
  }

  private openInventory(): void {
    console.log("You open your bag. Save for a dead moth, it's empty.");
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.resume();
        break;
      case "2":
        this.openInventory();
        break;
      case "3":
        console.log(`Okay, goodbye.`);
        this.gsm.gs.notDone = false;
        process.exit();
      default:
        return;
    }
  }
}
