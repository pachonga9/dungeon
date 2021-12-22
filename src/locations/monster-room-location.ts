// import { stdin, stdout } from "process";
// import * as readline from "readline";
import { GameStateManager } from "../state/game-state-manager";
import { GameStateType } from "../state/game-state-type";
import { DungeonLocation } from "./dungeon-location";

export class MonsterRoom implements DungeonLocation {
  //Monster stuff//
  monsterAlive: boolean = true;
  monsterLife: number = 10;
  roomComplete: boolean = false;

  constructor(private readonly gsm: GameStateManager) {}

  getInput(): Promise<string> {
    console.log(`1. Move Forward.`);
    console.log(`2. Fight Monster.`);
    console.log(`3. Flee`);
    console.log(`4. Menu`);
    return new Promise((resolve, reject) => {
      this.gsm.rl.question(
        "What would you like to do? ",
        (answer: string): void => {
          console.log(`You answered ${answer}`);
          resolve(answer);
        }
      );
    });
  }

  describeLocation(): void {
    // console.log(`You are in dungeon room ${this.gsm.gs.currentLocation}.`);
    console.log(
      `You are in dungeon room ${this.gsm.playerState.currentRoomIndex}.`
    );
    if (this.monsterAlive) {
      console.log(`A monster blocks your path.`);
      if (this.monsterLife >= 10) {
        console.log(`He looks healthy and hungry...`);
      } else if (this.monsterLife < 10) {
        console.log(`He looks wounded...`);
      }
    } else {
      console.log("A monster lays dead on the floor.");
    }
  }

  private goForward(): void {
    if (this.monsterAlive) {
      console.log(`You can't move forward while a monster blocks your path.`);
    } else {
      console.log("With the monster dead, you move into the next room.");
      this.gsm.playerState.currentRoomIndex++;
      if (this.roomComplete === false) {
        this.roomComplete = true;
        this.gsm.playerState.farthestRoom++;
      }
    }
  }

  private fightMonster(): void {
    if (this.monsterAlive) {
      // console.clear();
      console.log(`You swing your sword at the monster.`);
      this.rollPlayerAttackDamage();
    } else {
      // console.clear();
      console.log(
        `There is no monster here to fight. You wrestle with your inner demons.`
      );
    }
  }

  rollPlayerAttackDamage(): void {
    let dmg: number = this.getRandomInt();
    if (dmg === 0) {
      console.log("Your sword missed the monster entirely!");
    } else if (dmg === 10) {
      console.log(`CRITICAL HIT! The monster takes ${dmg} points of damage!`);
    } else {
      console.log(`Your sword connects for ${dmg} points of damage!`);
    }
    this.monsterLife = this.monsterLife - dmg;
    this.checkMonsterLifeStatus();
  }

  private checkMonsterLifeStatus(): void {
    if (this.monsterLife > 0) {
      console.log(`the monster still has ${this.monsterLife} health.`);
      this.rollMonsterAttackDamage();
    } else if (this.monsterLife <= 0) {
      this.killMonster();
    }
  }

  private rollMonsterAttackDamage(): void {
    let dmg: number = this.getRandomInt();
    if (dmg === 0) {
      console.log(`The monster lashes out but misses you entirely!`);
    } else if (dmg === 10) {
      console.log(
        `The monster strikes you with astounding strength! You take ${dmg} points of damage!`
      );
    } else {
      console.log(`The monster strikes you for ${dmg} points of damage!`);
    }
    this.gsm.playerState.lifeTotal = this.gsm.playerState.lifeTotal - dmg;
    this.checkPlayerLifeStatus();
  }

  private checkPlayerLifeStatus(): void {
    let health = this.gsm.playerState.lifeTotal;
    console.log(`Player Health: ${health}`);
    if (health <= 15 && health > 0) {
      console.log(`You are severely wounded!`);
      return;
    } else if (health <= 0) {
      this.killPlayer();
    }
  }

  private killPlayer(): void {
    console.log(
      `YOU ARE DEAD. YOUR CORPSE BECOMES A CRUNCHY SNACK FOR THE VARIOUS DARK CREATURES OF THE DUNGEON.`
    );
    console.log(`GAME OVER. INSERT 2 MORE COINS TO CONTINUE.`);
    process.exit();
  }

  private killMonster(): void {
    this.monsterAlive = false;
    console.log(
      "The monster lets out an agonized scream and crumples to the ground, dead. The way forward is clear."
    );
  }

  private getRandomInt(): number {
    return Math.floor(Math.random() * 11);
  }

  private flee(): void {
    console.log("MRL: You turn and run towards the exit like a coward.");
    this.gsm.playerState.currentRoomIndex = 0;
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
        this.gsm.moveToState(GameStateType.menu);
      default:
        return;
    }
  }
}
