import { GameStateManager } from "../state/game-state-manager";
import { GameStateType } from "../state/game-state-type";
import { DungeonLocation } from "./dungeon-location";

export class FinalRoom implements DungeonLocation {
  constructor(private readonly gsm: GameStateManager) {}

  getInput(): Promise<string> {
    console.log(`1. Move Forward`);
    console.log(`2. Greet Tom`);
    console.log(`3. Flee`);
    console.log(`4. Menu`);
    return new Promise((resolve, reject) => {
      this.gsm.rl.question(
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
      `You are in dungeon room ${this.gsm.playerState.currentRoomIndex}`
    );
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
    this.gsm.playerState.currentRoomIndex = 0;
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        console.clear();
        this.goForward();
        break;
      case "2":
        console.clear();
        this.greetTom();
        break;
      case "3":
        console.clear();
        this.flee();
        break;
      case "4":
        console.clear();
        this.gsm.moveToState(GameStateType.menu);
      default:
        return;
    }
  }
}
