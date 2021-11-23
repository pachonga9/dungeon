import { stdin, stdout } from "process";
import * as readline from "readline";
import { GameStateManager } from "./game-state-manager";

export abstract class GameState {
  protected readonly name: string;

  protected constructor(
    readonly stateName: string,
    private readonly gsm: GameStateManager,
    protected readonly rl = readline.createInterface({ input: stdin, output: stdout })
  ) {
  }

  abstract process(): Promise<void>;

  protected next(next: GameState) {
    this.gsm.currentState = this;
  }
}

