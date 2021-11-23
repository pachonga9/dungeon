import * as readline from "readline";
import { Location } from "../locations/location";
import { LocationFactory } from "../locations/location-factory";
import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { PlayerState } from "./player-state";


export class LocationGameState extends GameState {
  private readonly locations: Location[];

  constructor(gsm: GameStateManager, rl: readline.Interface, private readonly playerState = new PlayerState(), locationFactory = new LocationFactory()) {
    super("LocationGameState", gsm, rl);
    this.locations = locationFactory.create();
  }

  process(): Promise<void> {
    const currentLocationIndex = this.playerState.currentRoom;
    const currentLocation = this.locations[currentLocationIndex];
    currentLocation.describeLocation();
    const = currentLocation.getInputOptions()
    while()
    return currentLocation.getInput(this.rl, this.playerState, this.gsm);
  }

}