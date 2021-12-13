import {GameState} from "../game-state";
import {GameStateMachine} from "../game-state-machine";
import {GameStateType} from "../game-state-type";
import promptSync from "prompt-sync";

export class MenuGameState implements GameState {
  constructor(private readonly gsm: GameStateMachine) {
  }

  open(fromState: GameStateType): void {
    console.clear();
    if (fromState == GameStateType.welcome) {
      this.handleNewGame();
    }
    this.handleMenu();

  }

  transitionToState(state: GameStateType): void {
    const dest = this.gsm.getState(state);
    dest.open(GameStateType.crawler);
  }

  private handleNewGame(): void {
    console.log('Welcome to the start menu! Choose an option');
    console.log(`1. Start Game`);
    console.log(`2. End Game`);
    const option = promptSync()('What will you do? ');
    switch (option) {
      case '1':
        this.transitionToState(GameStateType.crawler);
        break;
      default:
        console.log('closing game');
        process.exit(1);
        return;
    }
  }

  private handleMenu() {
    console.clear();
    console.log('Game Menu');
    console.log(`1. Resume Game`);
    console.log('2. Open Inventory');
    console.log(`3. End Game`);
    const option = promptSync()('What will you do? ');
    switch (option) {
      case '1':
        this.transitionToState(GameStateType.crawler);
        break;
      case '2':
        this.transitionToState(GameStateType.inventory);
        break;
      default:
        console.log('ending game');
        process.exit(1);
    }
  }
}
