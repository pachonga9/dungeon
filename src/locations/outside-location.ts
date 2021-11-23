import { GameStateId } from "../state/game-state-id";
import { GameStateManager } from "../state/game-state-manager";
import { PlayerState } from "../state/player-state";
import { Location } from "./location";

export class Outside implements Location {
  visited = false;

  getInputOptions(): string[] {
    return [
      `Enter the Dungeon`,
      `Inspect Inventory`,
      `Open Menu`,
      `Return Home. (quit)`
    ];
  }

  handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean {
    switch (input) {
      case "1":
        break;
      case "2":
        gsm.setCurrentStateWithId(GameStateId.inventory);
        break;
      case "3":
        gsm.setCurrentStateWithId(GameStateId.menu);
        break;
      case "4":
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
