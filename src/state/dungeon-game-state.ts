import { DungeonLocation } from "../locations/dungeon-location";
import { DungeonLocationFactory } from "../locations/dungeon-location-factory";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";

export class DungeonGameState implements GameState {

  private locations: DungeonLocation[];

  constructor(
    private readonly gsm: GameStateManager,
    locationFactory = new DungeonLocationFactory(gsm)) {
    this.locations = locationFactory.create();
  }

  run = async (): Promise<void> => {
    console.log("dungeon: describe location, blah blah");
    const answer = await this.getInput();
    this.handleAnswer(answer);
  };

  getInput(): Promise<string> {
    return Promise.resolve("meow");
  }

  handleAnswer(answer: string) {
    console.log(answer);
  }
}
