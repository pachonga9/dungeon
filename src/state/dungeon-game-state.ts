import { DungeonLocation } from "../locations/dungeon-location";
import { DungeonLocationFactory } from "../locations/dungeon-location-factory";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";

export class DungeonGameState implements GameState {

  private readonly locations: DungeonLocation[];

  constructor(
    private readonly gsm: GameStateManager,
    locationFactory = new DungeonLocationFactory(gsm)) {
    this.locations = locationFactory.create();
  }

  run = async (): Promise<void> => {
    let currentRoomIndex = this.gsm.playerState.currentRoomIndex;
    console.log(`MAIN: I see that the room you are in is in fact: ${currentRoomIndex}.`);
    let roomToRun = this.locations[currentRoomIndex];
    roomToRun.describeLocation();
    const answer = await roomToRun.getInput();
    roomToRun.handleAnswer(answer);
  };
}
