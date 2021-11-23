import { stdin, stdout } from "process";
import readline from "readline";
import { GameStateId } from "./game-state-id";
import { GameStateManager } from "./game-state-manager";
import { IntroGameState } from "./intro-game-state";
import { InventoryGameState } from "./inventory-game-state";
import { LocationGameState } from "./location-game-state";
import { MenuGameState } from "./menu-game-state";
import { PlayerState } from "./player-state";

export class GameStateManagerFactory {

  constructor(private readonly rl = readline.createInterface({ input: stdin, output: stdout })) {
  }

  create(): GameStateManager {
    const gsm = new GameStateManager();
    const ps = new PlayerState();
    const introGameState = new IntroGameState(gsm, this.rl);
    const locationGameState = new LocationGameState(gsm, this.rl, ps);
    const inventoryGameState = new InventoryGameState(gsm, this.rl, ps);
    const menuGameState = new MenuGameState(gsm, this.rl, ps);

    gsm.addState(GameStateId.intro, introGameState);
    gsm.addState(GameStateId.location, locationGameState);
    gsm.addState(GameStateId.inventory, inventoryGameState);
    gsm.addState(GameStateId.menu, menuGameState);
    return gsm;
  }
}