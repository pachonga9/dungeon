import { GameStateId } from "./game-state-id";
import { GameStateManager } from "./game-state-manager";
import { IntroGameState } from "./intro-game-state";
import { InventoryGameState } from "./inventory-game-state";
import { LevelGameState } from "./level-game-state";
import { MenuGameState } from "./menu-game-state";

export class GameStateManagerFactory {

  create(): GameStateManager {
    const gsm = new GameStateManager();
    const introState = new IntroGameState(gsm);
    const levelState = new LevelGameState(gsm);
    const inventoryState = new InventoryGameState(gsm);
    const menuState = new MenuGameState(gsm);
    gsm.addState(GameStateId.intro, introState);
    gsm.addState(GameStateId.levels, levelState);
    gsm.addState(GameStateId.inventory, inventoryState);
    gsm.addState(GameStateId.menu, menuState);
    gsm.currentState = introState;
    return gsm;
  }
}