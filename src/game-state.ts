import {GameStateType} from "./game-state-type";

export interface GameState {
  open: (fromState: GameStateType) => void;
  transitionToState: (state: GameStateType) => void;
}
