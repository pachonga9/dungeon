import { DungeonGameState } from "./game-state";

export class GameStateManager {
  constructor(public readonly gs = new DungeonGameState()) {}

  // moveUp(): void {
  //   this.gs.currentLocation++;
  //   console.log(
  //     `GSM: I just told the gamestate current location to go up one.`
  //   );
  //   this.gs.farthestRoom++;
  //   console.log(`GSM: I just told gamestate farthest room to go up one.`);
  //   console.log(
  //     `GSM: The gamestate's current location says you are in room: ${this.gs.currentLocation}`
  //   );
  // }

  // runAway(): void {
  //   this.gs.currentLocation = 0;
  //   console.log(
  //     `GSM: I just told the gamestate to set current location to 0. Here's what it says: ${this.gs.currentLocation}`
  //   );
  // }

  // spawnMonster(): void {
  //   console.log("GSM: checking into spawning monsters...");
  //   console.log(
  //     `GSM: checking if current location is same as farthest location...`
  //   );
  //   if (this.gs.currentLocation === this.gs.farthestRoom) {
  //     console.log(`GSM: They are the same...`);
  //     this.gs.monsterBlock = true;
  //     console.log(`GSM: Monster block was set to: ${this.gs.monsterBlock}...`);
  //     this.gs.monsterLifeTotal = 10;
  //     console.log(
  //       `GSM: Monster health points have been set to: ${this.gs.monsterLifeTotal}...`
  //     );
  //   }
  // }

  // getIsPreviousRoom(): boolean {
  //   console.log("GSM: getting is this previous room...");
  //   return this.gs.currentLocation !== this.gs.farthestRoom;
  //   ///true or false? the place you are at now is different than the farthest place you've ever been.
  // }

  // getIsRoomOccupied(): boolean {
  //   console.log(`GSM: getting is this room occupied...`);
  //   const isInPreviousRoom: boolean = this.getIsPreviousRoom();
  //   if (isInPreviousRoom) {
  //     console.log("GSM: You have been here previously.");
  //     return false;
  //   }
  //   console.log(`GSM: You haven't been here before.`);
  //   return this.gs.monsterBlock;
  // }

  // endInstance(): void {
  //   this.gs.instanceNotComplete = true;
  // }
  // beginInstance(): void {
  //   this.gs.instanceNotComplete = false;
  // }
}
