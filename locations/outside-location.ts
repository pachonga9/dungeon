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
      `You are outside of the dungeon. You have ${this.gsm.gs.inventory.gold} gold.`
    );
  }

  private goForward(): void {
    console.log("You swing open the rusty door to the dungeon.");
    this.gsm.moveUp();
    console.log(
      `I am the outside location file. I also report that the current location should say 1. According to me, here's what it says: ${this.gsm.gs.currentLocation}`
    );
    console.log(
      "This is the part where the runRoom function in main.ts needs to go again... for now, I will exit the process."
    );
    process.exit();
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
        this.goForward();
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
