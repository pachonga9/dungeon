import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { GameStateType } from "./game-state-type";

export class MenuGameState implements GameState {
  constructor(private readonly gsm: GameStateManager) {}

  run = async (): Promise<void> => {
    console.log("Menu: Hi, This is the menu.");

    const answer = await this.getInput();

    this.handleAnswer(answer);
  };

  getInput(): Promise<string> {
    console.log(`1. Resume`);
    console.log(`2. Exit`);
    return new Promise((resolve, reject) => {
      this.gsm.rl.question(
        "What would you like to do? ",
        (answer: string): void => {
          console.log(`You answered ${answer}`);
          resolve(answer);
        }
      );
    });
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.gsm.moveToState(GameStateType.dungeon);
        break;
      case "2":
        this.gsm.isDone = true;
        break;
      default:
        return;
    }
  }
}
