import {GameStateFactory} from "./game-state-factory";
import {GameState} from "./game-state";
import {GameStateType} from "./game-state-type";

export class GameStateMachine {
  private currentState_: GameState;

  constructor(
    private readonly states = new Map<GameStateType, GameState>(),
    private readonly gsFactory = new GameStateFactory()) {
    this.initStates();
  }

  get currentState(): GameState {
    return this.currentState_;
  }

  initStates() {
    this.states.set(GameStateType.crawler, this.gsFactory.create(GameStateType.crawler, this));
    this.states.set(GameStateType.inventory, this.gsFactory.create(GameStateType.inventory, this));
    this.states.set(GameStateType.menu, this.gsFactory.create(GameStateType.menu, this));
    this.states.set(GameStateType.welcome, this.gsFactory.create(GameStateType.welcome, this));
    this.currentState_ = this.states.get(GameStateType.welcome);
  }

  getState(stateType: GameStateType): GameState {
    const state: GameState = this.states.get(stateType);
    return state;
  }
}
