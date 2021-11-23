import { Interface } from "readline";
import { GameState } from "./game-state";
import { GameStateId } from "./game-state-id";
import { GameStateManager } from "./game-state-manager";
import { PlayerState } from "./player-state";

export class MenuGameState extends GameState {
  private save = false;
  private load = false;
  private unsupported = false;

  constructor(gsm: GameStateManager, private readonly rl: Interface, private readonly playerState: PlayerState) {
    super("MenuGameState", gsm);
  }

  async process(): Promise<void> {
    console.clear();
    const options = [
      `Resume`,
      `Save Game`,
      `Load Game`,
      `Quit Game`
    ];
    console.log("This is the menu.");
    if (this.save) {
      console.log("save is not yet supported.");
    } else if (this.load) {
      console.log("load is not yet supported.");
    } else if (this.unsupported) {
      console.log("you selected an unsupported option.");
    }
    this.save = false;
    this.load = false;
    this.unsupported = false;

    const answer = await this.getInput(this.rl, options);
    const retry = this.handleInput(answer, this.playerState, this.gsm);
    if (retry) {
      return await this.process();
    }
  }

  protected handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean {
    switch (input) {
      case "1":
        this.gsm.setCurrentStateWithId(GameStateId.location);
        return false;
      case "2":
        this.save = true;
        return false;
      case "3":
        this.load = true;
        return false;
      case "4":
        this.gsm.quit = true;
        return false;
      default:
        this.unsupported = true;
        return true;
    }
  }

}