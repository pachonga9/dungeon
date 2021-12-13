import {GameState} from "../game-state";
import {GameStateMachine} from "../game-state-machine";
import {GameStateType} from "../game-state-type";
import promptSync from "prompt-sync";


export class WelcomeGameState implements GameState {
  constructor(private readonly gsm: GameStateMachine) {
  }

  open(fromState: GameStateType): void {
    console.clear();
    this.playIntro(fromState);
  }

  transitionToState(state: GameStateType): void {
    const dest = this.gsm.getState(state);
    dest.open(GameStateType.welcome);
  }

  private playIntro(fromState: GameStateType) {
    if (fromState != null) {
      console.log('How the heck did you get to this to display!?');
    }
    console.log('Welcome to Dungeon');
    this.transitionToState(GameStateType.menu);
    return;
    setTimeout(() => {
      console.log('Dad: You are lazy and need to farm');
      setTimeout(() => {
        console.log('You: No! I will adventure!');
        setTimeout(() => {
          console.log(`Dad: Don't die!`);
          setTimeout(() => {
            console.log(`You spend the next few days walking to the adventure's camp outside the dungeon.`);
            setTimeout(() => {
              promptSync()('Press any key to open the menu...');
              this.transitionToState(GameStateType.menu);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }
}
