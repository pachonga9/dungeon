import * as readline from "readline";
import { Location } from "../locations/location";
import { LocationFactory } from "../locations/location-factory";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { PlayerState } from "./player-state";


export class LocationGameState extends GameState {
  private readonly locations: Location[];

  constructor(
    gsm: GameStateManager,
    private readonly rl: readline.Interface,
    private readonly playerState = new PlayerState(),
    locationFactory = new LocationFactory()
  ) {
    super("LocationGameState", gsm);
    this.locations = locationFactory.create(playerState, gsm);
  }

  async process(): Promise<void> {
    console.log(`currentRoom: ${this.playerState.currentRoom}, farthestRoom: ${this.playerState.farthestRoom}`);
    const currentLocationIndex = this.playerState.currentRoom;
    const currentLocation = this.locations[currentLocationIndex];
    currentLocation.describeLocation();
    const options = currentLocation.getInputOptions();
    const answer = await this.getInput(this.rl, options);
    currentLocation.handleInput(answer);
  }

  protected handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean {
    return false;
  }

}