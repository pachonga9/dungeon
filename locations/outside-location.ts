import { Location } from "../location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class Outside implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}

  getInput(): Promise<string> {
    this.describeLocation();
    console.log(`1. Enter the Dungeon.`);
    console.log(`2. Check Shop.`);
    console.log(`3. Exit Game.`);
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
    console.log(
      `You are outside of the dungeon. You have ${this.gsm.gs.inventory.gold} gold.`
    );
  }

  private goForward(): void {
    console.log("You swing open the rusty door to the dungeon.");
    this.gsm.moveUp();
  }

  private checkShop(): void {
    console.log(
      "An old shack serves as a last stop for the intrepid and stupid dungeoneers alike."
    );
    console.log("A sign hangs on the door. SHOP CLOSED!");
    console.log(
      "Looks like there will be no shopping today. You head back to the start."
    );
    this.getInput();
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.goForward();
        break;
      case "2":
        this.checkShop();
        break;
      case "3":
        console.log(`Okay, goodbye.`);
        this.gsm.gs.notDone = false;
      default:
        this.getInput();
        return;
    }
  }
}
