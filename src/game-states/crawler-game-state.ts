import {GameState} from "../game-state";
import {GameStateMachine} from "../game-state-machine";
import {GameStateType} from "../game-state-type";
import promptSync from "prompt-sync";

export class CrawlerGameState implements GameState {
  constructor(private readonly gsm: GameStateMachine) {
  }

  open(): void {
    console.clear();
    this.handleInput();
  }

  transitionToState(state: GameStateType): void {
    const dest = this.gsm.getState(state);
    dest.open(GameStateType.crawler);
  }

  private handleInput() {
    console.log('womp womp');
    console.log(`1. Kick Door`);
    console.log('2. Fight Monster');
    console.log('3. Flee');
    console.log(`4. Manage Inventory`);
    console.log(`5. Open Game Menu`);
    const option = promptSync()('What will you do? ');
    switch (option) {
      case '1':
        this.kickDoor();
        break;
      case '2':
        this.fightMonster();
        break;
      case '3':
        this.flee();
        break;
      case '4':
        this.transitionToState(GameStateType.inventory);
        break;
      case '5':
        this.transitionToState(GameStateType.menu);
        break;
      default:
        console.log('ending game');
        process.exit(1);
    }
  }

  private kickDoor() {
    console.clear();
    console.log('you kicked the door');
    this.handleInput();
  }

  private fightMonster() {
    console.clear();
    console.log('you fought the monster');
    this.handleInput();
  }

  private flee() {
    console.clear();
    console.log('you fled');
    this.handleInput();
  }
}
