import {GameStateMachine} from "./game-state-machine";
import {GameStateType} from "./game-state-type";
import {CrawlerGameState} from "./game-states/crawler-game-state";
import {WelcomeGameState} from "./game-states/welcome-game-state";
import {MenuGameState} from "./game-states/menu-game-state";
import {InventoryGameState} from "./game-states/inventory-game-state";
import {GameState} from "./game-state";

export class GameStateFactory {
  create(stateType: GameStateType, gsm: GameStateMachine): GameState {
    switch (stateType) {
      case GameStateType.crawler:
        return new CrawlerGameState(gsm);
      case GameStateType.inventory:
        return new InventoryGameState(gsm);
      case GameStateType.menu:
        return new MenuGameState(gsm);
      case GameStateType.welcome:
        return new WelcomeGameState(gsm);
      default:
        throw new Error('invalid state');
    }
  }
}
