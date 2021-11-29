import { Location } from "../location";

export class MonsterRoom implements Location {
  getInput(): void {
    this.describeLocation();
    console.log("You found the next room!");
  }

  describeLocation(): void {
    console.log(`In monster Room.`);
  }
}
