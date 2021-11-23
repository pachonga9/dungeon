/// location interface

import { GameStateManager } from "../state/game-state-manager";
import { PlayerState } from "../state/player-state";

export abstract class Location {
  constructor(protected readonly playerState: PlayerState, protected readonly gsm: GameStateManager) {
  }

  abstract getInputOptions(): string[];

  abstract handleInput(input: string): boolean;

  abstract describeLocation(): void;
}

/// this location interface, when implemented, forces each individual location class to define these two functions.
