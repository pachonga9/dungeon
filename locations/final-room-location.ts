import { Location } from "./location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class FinalRoom implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}
  getInput(): Promise<string> {
    this.describeLocation();
    console.log(`1. Move Forward`);
    console.log(`2. Greet Tom`);
    console.log(`3. Flee`);
    console.log(`4. Menu`);
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
    console.log(`You are in dungeon room ${this.gsm.gs.currentLocation}.`);
    console.log(
      `A man in a white T-shirt stands in front of you. His smile is charming, if not a bit unsettling.`
    );
    console.log(`"Hi! I'm Tom."`);
  }

  private goForward(): void {
    console.log("You walk into Tom. Kinda awkward.");
    console.log(`He giggles. "Hey, you're in *myspace*."`);
  }

  private greetTom(): void {
    console.log('"uh... Hi, Tom."');
    console.log(
      `"Hey buddy! I am your first friend here! Welcome to the final space. Or as I like to call it, My Space!" - Tom says.`
    );
  }

  private flee(): void {
    console.log(
      "FRL: This is weird. You turn and run towards the exit like a coward."
    );
    this.gsm.gs.currentLocation = 0;
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.goForward();
        break;
      case "2":
        this.greetTom();
        break;
      case "3":
        this.flee();
        break;
      case "4":
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
