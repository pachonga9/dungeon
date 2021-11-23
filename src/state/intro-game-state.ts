import * as readline from "readline";
import { GameState } from "./game-state";
import { GameStateId } from "./game-state-id";
import { GameStateManager } from "./game-state-manager";
import { PlayerState } from "./player-state";

export class IntroGameState extends GameState {
  constructor(gsm: GameStateManager, private readonly rl: readline.Interface) {
    super("IntroGameState", gsm);
  }

  process(): Promise<void> {
    return new Promise((resolve) => {
      console.log("Welcome to the Dungeon Game");
      return this.rl.question("Press enter to Begin", () => {
        this.gsm.setCurrentStateWithId(GameStateId.location);
        resolve();
      });
    });
  }

  protected handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean {
    return false;
  }
}