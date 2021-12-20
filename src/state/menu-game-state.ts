import { GameState } from "./game-state";

export class MenuGameState implements GameState {
  run(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("menu");
        resolve();
      }, 1000);
    });
  }
}
