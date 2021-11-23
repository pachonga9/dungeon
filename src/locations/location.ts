/// location interface

import { GameStateManager } from "../state/game-state-manager";
import { PlayerState } from "../state/player-state";

export interface Location {
  visited: boolean;

  getInputOptions(): string[];

  handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean;

  describeLocation(): void;
}

/// this location interface, when implemented, forces each individual location class to define these two functions.
