import { Location } from "../location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class Shop implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}

  newInstance: boolean = true;

  getInput(): Promise<string> {
    this.describeLocation();
    console.log(`1. Peruse Wares.`);
    console.log(`2. Leave the Shop`);
    console.log(`3. Menu`);
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
    if (this.newInstance) {
      console.log(
        `SHOP: As you step inside the shop, a bell afixed to the door jingles.`
      );
      console.log(
        `A small dwarven man mumbles something about "...another one. hrrmmmm of coursemmm... Buy sum'n or leave.'`
      );
    } else {
      console.log("The shopkeeping dwarf grumbles...");
    }
  }

  private peruseWares(): void {
    this.newInstance = false;
    console.log(
      "This is the part where you would peruse the wares of the shop..."
    );
    console.log(
      'The shopkeeper mumbles something about a "dev god not up to par with other gods" and "idiot devs not giving me s-- to hrmmm sell."'
    );
    console.log(`It may be best to come back later, you think.`);
  }

  private leaveShop(): void {
    this.newInstance = true;
    console.log(
      "SHOP: You leave the shop. The shopkeeper grumbles some more..."
    );
    this.gsm.gs.currentLocation = 0;
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.peruseWares();
        break;
      case "2":
        this.leaveShop();
        break;
      case "3":
        this.gsm.gs.lastLocation = this.gsm.gs.currentLocation;
        this.gsm.gs.currentLocation = 9;
      // console.log(`Okay, goodbye.`);
      // this.gsm.gs.notDone = false;
      // process.exit();
      default:
        // this.getInput();
        return;
    }
  }
}
