import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { GameStateType } from "./game-state-type";

export class MenuGameState implements GameState {
  constructor(private readonly gsm: GameStateManager) {}

  run = async (): Promise<void> => {
    console.log("MAIN MENU");

    const answer = await this.getInput();

    this.handleAnswer(answer);
  };

  getInput(): Promise<string> {
    console.log(`1. Resume`);
    console.log(`2. Open Inventory`);
    console.log(`3. Exit`);
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
        console.clear();
        this.gsm.moveToState(GameStateType.dungeon);
        break;
      case "2":
        console.clear();
        this.gsm.moveToState(GameStateType.inventory);
        break;
      case "3":
        console.clear();
        console.log("GAME OVER.");
        this.gsm.isDone = true;
        break;
      default:
        return;
    }
  }
}
