import { Interface } from "readline";
import { GameStateManager } from "../state/game-state-manager";
import { PlayerState } from "../state/player-state";
import { Location } from "./location";

export class BossRoom implements Location {
  visited = false;


  describeLocation(): void {
  }

  getInput(rl: Interface, playerState: PlayerState, gsm: GameStateManager): Promise<void> {
    return Promise.resolve(undefined);
  }
}
