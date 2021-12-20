import { Location } from "./location";
import { GameStateManager } from "../state/game-state-manager";
import { PlayerStateManager } from "../state/player-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class Outside implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager(),
    private readonly psm = new PlayerStateManager()
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
      `OL: You are outside of the dungeon. You have ${this.psm.player.lifeTotal} health. You have ${this.gsm.dungeonGameState.inventory.gold} gold. The furthest room you have cleared is room ${this.psm.player.farthestRoom}.`
    );
  }

  private goForward(): void {
    console.log("OL: Moving forward into the dungeon unabaited...");
    this.psm.player.currentRoom++;
    // this.gsm.gs.currentLocation++;
  }

  private checkShop(): void {
    console.log(
      "An old shack serves as a last stop for the intrepid and stupid dungeoneers alike."
    );
    console.log("You head up to the door to the shop.");
    this.psm.player.currentRoom = 8;
    // this.gsm.gs.currentLocation = 8;
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
        this.psm.player.lastRoom = this.psm.player.currentRoom;
        this.psm.player.currentRoom = 9;

      // this.gsm.gs.lastLocation = this.gsm.gs.currentLocation;
      // this.gsm.gs.currentLocation = 9;
      // console.log(`Okay, goodbye.`);
      // this.gsm.gs.notDone = false;
      // process.exit();
      default:
        return;
    }
  }
}
