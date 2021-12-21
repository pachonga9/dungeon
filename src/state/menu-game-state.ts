import { stdin, stdout } from "process";
import * as readline from "readline";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { GameStateType } from "./game-state-type";

export class MenuGameState implements GameState {
  constructor(
    private readonly gsm: GameStateManager,
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    })
  ) {}

  run = async (): Promise<void> => {
    const answer = await this.getInput();
    this.handleAnswer(answer);

    // console.log("opened menu");
    // console.log("pretend you played around and now want to resume");
    // console.log("user presses 1 to resume.");
    // this.gsm.moveToState(GameStateType.dungeon);
  };

  getInput(): Promise<string> {
    console.log(`1. Resume`);
    console.log(`2. Exit`);
    return new Promise((resolve, reject) => {
      this.rl.question(
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
