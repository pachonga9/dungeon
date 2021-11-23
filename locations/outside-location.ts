import { Location } from "../location";
import { Inventory } from "../inventory";
import { CurrentLocation } from "../currentLocation";
import { stdin, stdout } from "process";
import * as readline from "readline";

const inventory = new Inventory();
const currentLocation = new CurrentLocation();

export class Outside implements Location {
  rl = readline.createInterface({ input: stdin, output: stdout });
  getInput(): void {
    this.describeLocation();
    console.log(`1. Enter the Dungeon.`);
    console.log(`2. Check Shop.`);
    console.log(`3. Exit Game.`);
    this.rl.question("What would you like to do? ", (answer: string): void => {
      console.log(`You answered ${answer}`);
      this.handleAnswer(answer);
    });
  }

  describeLocation(): void {
    console.log(
      `You are outside of the dungeon. You have ${inventory.inventory.gold} gold.`
    );
  }

  private moveUp(): void {
    console.log("You swing open the rusty door to the dungeon.");
    currentLocation.moveUp();
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

  private handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.moveUp();
        break;
      case "2":
        this.checkShop();
        break;
      case "3":
        console.log(`Okay, goodbye.`);
        process.exit();
      default:
        this.getInput();
        return;
    }
  }
}
