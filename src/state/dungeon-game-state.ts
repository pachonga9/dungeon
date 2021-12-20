import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { GameStateType } from "./game-state-type";

export class DungeonGameState implements GameState {

  constructor(private readonly gsm: GameStateManager) {
  }

  run(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.gsm.moveToState(GameStateType.menu);
        resolve();
      }, 1000);
    });
  }

  // getInput(): Promise<string> {
  //   return Promise.resolve("");
  // }
  //
  // handleAnswer(answer: string) {
  // }
}
