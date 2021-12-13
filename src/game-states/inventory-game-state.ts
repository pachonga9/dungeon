import {GameState} from "../game-state";
import {GameStateType} from "../game-state-type";
import {GameStateMachine} from "../game-state-machine";
import promptSync from "prompt-sync";

export class InventoryGameState implements GameState {
  constructor(private readonly gsm: GameStateMachine) {
  }

  open(fromState: GameStateType): void {
    this.handleMenu();
  }

  transitionToState(state: GameStateType): void {
    const dest = this.gsm.getState(state);
    dest.open(GameStateType.crawler);
  }

  private handleMenu() {
    console.clear();
    console.log('Inventory Management');
    console.log('your bag contains.... ');
    console.log('1. resume');
    console.log('2. sell items');
    const option = promptSync()('What will you do? ');
    switch (option) {
      case '1':
        this.transitionToState(GameStateType.crawler);
        break;
      case '2':
        promptSync()(`this isn't ready yet... press any key to continue`);
        this.handleMenu();
        break;
      default:
        console.log('ending game');
        process.exit(1);
    }

  }
}
