/// location interface

export interface Location {
  getInput(): void;
  describeLocation(): void;
}
/// this location interface, when implemented, forces each individual location class to define these two functions.
