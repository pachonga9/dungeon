import { GameStateManager } from "../state/game-state-manager";
import { PlayerState } from "../state/player-state";
import { Location } from "./location";

export class Outside implements Location {
  visited = false;

  getInputOptions(): string[] {
    return [
      `Enter the Dungeon`,
      `Return Home. (quit)`
    ];
  }

  handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean {
    switch (input) {
      case "1":
        break;
      case "2":
        console.log("you give up on adventuring and return to the farm...for now");
        gsm.quit = true;
        break;
      default:
        return false;
    }
    return true;
  }

  describeLocation(): void {
    console.log("You are outside the dungeon");
  };
}
