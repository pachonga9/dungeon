export class CurrentLocation {
  currentLocationIndex: number = 0;

  moveUp(): void {
    this.currentLocationIndex += 1;
  }
}
