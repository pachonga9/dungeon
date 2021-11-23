import { Location } from "../location";

export class MonsterRoom implements Location {
  getInput(): void {
    console.log("You found the next room!");
  }

  describeLocation(): void {}
}
