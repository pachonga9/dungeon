import { stdin, stdout } from "process";
import * as readline from "readline";
import { DungeonGameState } from "./dungeon-game-state";
import { GameState } from "./game-state";
import { GameStateType } from "./game-state-type";
import { MenuGameState } from "./menu-game-state";
import { PlayerState } from "./player-state";
import { Runnable } from "./runnable";

export class GameStateManager {
  public isDone = false;
  public states = new Map<GameStateType, GameState>();
  private currentGameStateKey: GameStateType;
  public rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  constructor(private readonly playerState_ = new PlayerState()) {
    this.states.set(GameStateType.dungeon, new DungeonGameState(this));
    this.states.set(GameStateType.menu, new MenuGameState(this)); //// this `this` isn't assignable to type interface.
    this.moveToState(GameStateType.dungeon); /// switched this from menu to dungeon
    /// so that the game doesn't start in what is, at the moment, essentially a pause menu.
  }

  get playerState(): PlayerState {
    return this.playerState_;
  }

  get currentGameState(): Runnable {
    return this.states.get(this.currentGameStateKey);
  }

  moveToState(stateType: GameStateType): void {
    const message = `moving from: ${this.currentGameStateKey} state to ${stateType} state`;
    console.log(message);
    this.currentGameStateKey = stateType;
  }
}
