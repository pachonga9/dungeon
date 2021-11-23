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
    this.locations = locationFactory.create();
  }

  async process(): Promise<void> {
    const currentLocationIndex = this.playerState.currentRoom;
    const currentLocation = this.locations[currentLocationIndex];
    currentLocation.describeLocation();
    const options = currentLocation.getInputOptions();
    const answer = await this.getInput(this.rl, options);
    currentLocation.handleInput(answer, this.playerState, this.gsm);
  }

  protected handleInput(input: string, playerState: PlayerState, gsm: GameStateManager): boolean {
    return false;
  }

}