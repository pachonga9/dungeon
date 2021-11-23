import * as readline from "readline";
import { GameStateManager } from "./game-state-manager";
import { PlayerState } from "./player-state";


export abstract class GameState {

  protected constructor(
    readonly stateName: string,
    protected readonly gsm: GameStateManager) {
  }

  abstract process(): Promise<void>;

  protected abstract handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean;

  protected async getInput(rl: readline.Interface, options: string[]): Promise<string> {
    console.log("The following options:");
    for (let x = 0; x < options.length; x++) {
      console.log(`${x + 1}. ${options[x]}`);
    }
    return new Promise((resolve => {
      rl.question("What would you like to do? ", (answer => {
        resolve(answer);
      }));
    }));
  }
}

