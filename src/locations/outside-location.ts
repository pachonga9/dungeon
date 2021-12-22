import { GameStateManager } from "../state/game-state-manager";
import { GameStateType } from "../state/game-state-type";
import { DungeonLocation } from "./dungeon-location";

export class Outside implements DungeonLocation {
  constructor(private readonly gsm: GameStateManager) {}

  getInput(): Promise<string> {
    console.log(`1. Enter the Dungeon.`);
    console.log(`2. Check Shop.`);
    console.log(`3. Menu.`);
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
      `OL: You are outside of the dungeon. You have ${this.gsm.playerState.lifeTotal} health. You have ${this.gsm.playerState.inventory.gold} gold. The furthest room you have cleared is room ${this.gsm.playerState.farthestRoom}.`
    );
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
        this.gsm.moveToState(GameStateType.menu);

      // this.gsm.gs.lastLocation = this.gsm.gs.currentLocation;
      // this.gsm.gs.currentLocation = 9;
      // console.log(`Okay, goodbye.`);
      // this.gsm.gs.notDone = false;
      // process.exit();
      default:
        return;
    }
  }

  private goForward(): void {
    console.log("OL: Moving forward into the dungeon unabaited...");
    this.gsm.playerState.currentRoomIndex++;
    // this.gsm.gs.currentLocation++;
  }

  private checkShop(): void {
    console.log(
      "An old shack serves as a last stop for the intrepid and stupid dungeoneers alike."
    );
    console.log("You head up to the door to the shop.");
    this.gsm.playerState.currentRoomIndex = 8;
    // this.gsm.gs.currentLocation = 8;
  }
}
