/// location interface

export interface DungeonLocation {
  getInput(): Promise<string>;
  handleAnswer(answer: string): void;
  describeLocation(): void;
}
/// this location interface, when implemented, forces each individual location class to define these two functions.
