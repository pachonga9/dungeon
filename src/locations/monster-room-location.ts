import { GameStateId } from "../state/game-state-id";
import { GameStateManager } from "../state/game-state-manager";
import { PlayerState } from "../state/player-state";
import { Location } from "./location";

export class MonsterRoom extends Location {

  constructor(private monsterHealth: number, playerState: PlayerState, gsm: GameStateManager) {
    super(playerState, gsm);
  }

  getInputOptions(): string[] {
    const options: string[] = [];
    if (this.monsterHealth < 1) {
      options.push("proceed to next room");
      options.push("inspect inventory");
    } else {
      options.push("attack monster");
      options.push("retreat 1 room");
      options.push("return to camp");
    }
    options.push("Open Menu");
    return options;
  }

  handleInput(input: string): boolean {
    const isMonsterDead = this.monsterHealth < 1;
    switch (input) {
      case "1":
        if (isMonsterDead) {
          this.playerState.currentRoom++;
          if (this.playerState.currentRoom > this.playerState.farthestRoom) {
            this.playerState.farthestRoom = this.playerState.currentRoom;
          }
        } else {
          this.attackMonster();
        }
        return false;
      case "2":
        if (isMonsterDead) {
          this.gsm.setCurrentStateWithId(GameStateId.inventory);
        } else {
          console.log("runnn!!!");
          this.playerState.currentRoom--;
        }
        return false;
      case "3":
        this.playerState.currentRoom = 0;
        return false;
      case "4":
        this.gsm.setCurrentStateWithId(GameStateId.menu);
        return false;
      default:
        return true;
    }
  }

  describeLocation(): void {
    console.log(`you are in room #${this.playerState.currentRoom}`);
    if (this.monsterHealth < 1) {
      console.log("a monster lies dead on the floor");
    } else {
      console.log(`a monster stands before you blocking progress. It has ${this.monsterHealth} HP`);
    }
  };

  private attackMonster() {
    console.log("you attack the monster");
    this.monsterHealth -= 4;
  }
}
