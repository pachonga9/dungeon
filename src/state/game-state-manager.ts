import { Logger } from "../logger";
import { GameState } from "./game-state";
import { GameStateId } from "./game-state-id";

export class GameStateManager {

  public quit = false;
  private currentState_: GameState;

  constructor(
    private readonly gameStates = new Map<GameStateId, GameState>(),
    private readonly logger = new Logger(true)
  ) {
  }

  get currentState(): GameState {
    if (this.currentState_ == null) {
      throw new Error("currentState is not yet set");
    }
    return this.currentState_;
  }

  set currentState(next: GameState) {
    if (next == null) {
      throw new Error("next state cannot be null");
    }
    this.logger.log(`You transitioned to: ${next.stateName}, from: ${this.currentState_.stateName}.`);
    this.currentState_ = next;
  };

  setLogTrace(value: boolean) {
    this.logger.setTrace(value);
  }

  addState(id: GameStateId, state: GameState): void {
    this.gameStates.set(id, state);
  }

  getState(id: GameStateId): GameState {
    return this.gameStates.get(id);
  }
}
