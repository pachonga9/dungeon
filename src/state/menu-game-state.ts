import { stdin, stdout } from "process";
import * as readline from "readline";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { GameStateType } from "./game-state-type";

export class MenuGameState implements GameState {
  constructor(private readonly gsm: GameStateManager) {}

  run = async (): Promise<void> => {
    console.log("opened menu");
    console.log("pretend you played around and now want to resume");
    console.log("user presses 1 to resume.");
    this.gsm.moveToState(GameStateType.dungeon);
  };
}
