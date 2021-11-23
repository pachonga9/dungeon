import { Interface } from "readline";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";

export class MenuGameState extends GameState {
  constructor(gsm: GameStateManager, rl: Interface) {
    super("MenuGameState", gsm, rl);
  }

  process(): Promise<void> {
    return Promise.resolve(undefined);
  }

}