import {GameStateMachine} from "./game-state-machine";

export class App {

  constructor(private readonly gsm = new GameStateMachine()) {
  }

  run = () => {
    const currentState = this.gsm.currentState;
    currentState.open(null);
  }
}
