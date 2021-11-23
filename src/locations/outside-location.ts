import { GameStateId } from "../state/game-state-id";
import { Location } from "./location";

export class Outside extends Location {

  getInputOptions(): string[] {
    return [
      `Enter the Dungeon`,
      `Inspect Inventory`,
      `Open Menu`
    ];
  }

  handleInput(input: string): boolean {
    switch (input) {
      case "1":
        this.playerState.currentRoom++;
        if (this.playerState.currentRoom > this.playerState.farthestRoom) {
          this.playerState.farthestRoom = this.playerState.currentRoom;
        }
        return false;
      case "2":
        this.gsm.setCurrentStateWithId(GameStateId.inventory);
        return false;
      case "3":
        this.gsm.setCurrentStateWithId(GameStateId.menu);
        return false;
      default:
        return true;
    }
  }

  describeLocation(): void {
    console.log("You are outside the dungeon");
    console.log(`You have ${this.playerState.currentHealth}/${this.playerState.maxHealth} HP`);
  };
}
