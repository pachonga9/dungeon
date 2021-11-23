import { GameStateManager } from "../state/game-state-manager";
import { PlayerState } from "../state/player-state";
import { Location } from "./location";

export class FinalRoom implements Location {
  visited = false;

  describeLocation(): void {
  }

  getInputOptions(): string[] {
    return [];
  }

  handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean {
    return false;
  }
}
