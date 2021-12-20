import { DungeonLocationFactory } from "../locations/dungeon-location-factory";
import { GameState } from "./game-state";

export class DungeonGameState implements GameState {

  constructor(private readonly locationFactory = new DungeonLocationFactory()) {
  }

  run(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("dungeon");
        resolve();
      }, 1000);
    });
  }

  // getInput(): Promise<string> {
  //   return Promise.resolve("");
  // }
  //
  // handleAnswer(answer: string) {
  // }
}
