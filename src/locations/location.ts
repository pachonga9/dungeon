/// location interface

export interface Location {
  visited: boolean;
  getInput(): void;
  describeLocation(): void;
}
/// this location interface, when implemented, forces each individual location class to define these two functions.
