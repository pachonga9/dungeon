import { Interface } from "readline";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { PlayerState } from "./player-state";

export class InventoryGameState extends GameState {
  constructor(gsm: GameStateManager, private readonly rl: Interface, private readonly playerState: PlayerState) {
    super("InventoryGameState", gsm);
  }

  process(): Promise<void> {
    console.log('Inventory State');
    return Promise.resolve(undefined);
  }

  protected handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean {
    return false;
  }
}