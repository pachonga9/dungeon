import { stdin, stdout } from "process";
import * as readline from "readline";
import { GameStateId } from "./game-state-id";
import { GameStateManager } from "./game-state-manager";


export abstract class GameState {

  protected constructor(
    readonly stateName: string,
    protected readonly gsm: GameStateManager,
    protected readonly rl = readline.createInterface({ input: stdin, output: stdout })
  ) {
  }

  abstract process(): Promise<void>;

  protected next(nextId: GameStateId) {
    const next = this.gsm.getState(nextId);
    this.gsm.currentState = next;
  }
}

