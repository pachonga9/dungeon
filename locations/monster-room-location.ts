import { Location } from "../location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class MonsterRoom implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}

  getInput(): Promise<string> {
    this.describeLocation();
    console.log(`1. Move Forward.`);
    console.log(`2. Check Shop.`);
    console.log(`3. Flee`);
    console.log(`4. Exit Game.`);
    return new Promise((resolve, reject) => {
      this.rl.question(
        "What would you like to do? ",
        (answer: string): void => {
          console.log(`You answered ${answer}`);
          resolve(answer);
        }
      );
    });
  }

  describeLocation(): void {
    console.log("MRL: This room was made for monsters...");
    console.log(`MRL: You are in room ${this.gsm.gs.currentLocation}. The walls are covered with claw marks. Tufts of fur, flesh and bone cover the floor.
    It is obvious that some foul creature has been living here.`);
    if (this.gsm.gs.monsterBlock === true) {
      console.log("A monster Blocks your path.");
    }
  }

  private goForward(): void {
    console.log(`MRL: Seeing if the path forward is clear...`);
    console.log(`MRL: Hey GSM, is this room occupied?`);
    const isMonsterInThisRoom: boolean = this.gsm.getIsRoomOccupied();
    if (isMonsterInThisRoom) {
      console.log(
        `MRL: You can't move forward while the monster blocks your path.`
      );
      this.getInput();
      return;
    }

    const isInPreviousRoom: boolean = this.gsm.getIsPreviousRoom();
    if (isInPreviousRoom) {
      console.log(
        "MRL: You have already kicked down this door. You move deeper into the dungeon."
      );
      this.gsm.moveUp();
      console.log(
        `MRL: You check your map. You are in dungeon room ${this.gsm.gs.currentLocation}. You have been here before.`
      );
      this.getInput();
      return;
    }
    this.gsm.moveUp();
  }

  private fightMonster(): void {
    console.log(
      "MRL: You fight... but the dev has yet to create the combat stuff so..."
    );
    console.log(
      "MRL: Looks like there will be no fighting today. You head back to the start."
    );
    this.getInput();
  }

  private flee(): void {
    console.log("MRL: You turn and run towards the exit like a coward.");
    console.log(`MRL: Telling the GSM to runaway...`);
    this.gsm.runAway();
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.goForward();
        break;
      case "2":
        this.fightMonster();
        break;
      case "3":
        this.flee();
        break;
      case "4":
        console.log(`Okay, goodbye.`);
        this.gsm.gs.notDone = false;
        process.exit();
      default:
        this.getInput();
        return;
    }
  }
}
