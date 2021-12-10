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
    console.log("OL: Getting Input...");
    this.describeLocation();
    console.log(`1. Enter the Dungeon.`);
    console.log(`2. Check Shop.`);
    console.log(`3. Menu.`);
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
      `OL: You are outside of the dungeon. You have ${this.gsm.gs.inventory.gold} gold. The furthest you have gone is room ${this.gsm.gs.farthestRoom}...Doesn't matter yet. it will always show zero.`
      /// the farthest room you have gone doesnt work yet.
    );
  }

  private goForward(): void {
    console.log("OL: Moving forward into the dungeon unabaited...");
    this.gsm.gs.currentLocation++;
  }

  private checkShop(): void {
    console.log(
      "An old shack serves as a last stop for the intrepid and stupid dungeoneers alike."
    );
    console.log("You head up to the door to the shop.");
    this.gsm.gs.currentLocation = 8;
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
        this.gsm.gs.lastLocation = this.gsm.gs.currentLocation;
        this.gsm.gs.currentLocation = 9;
      // console.log(`Okay, goodbye.`);
      // this.gsm.gs.notDone = false;
      // process.exit();
      default:
        return;
    }
  }
}
