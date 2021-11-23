import { Location } from "./location";

export class BossRoom extends Location {

  describeLocation(): void {
  }


  getInputOptions(): string[] {
    return [];
  }

  handleInput(input: string): boolean {
    return false;
  }
}
