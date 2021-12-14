import { Location } from "./location";
import { GameStateManager } from "../state/game-state-manager";
import { PlayerStateManager } from "../state/player-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";

export class BossRoom implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager(),
    private readonly psm = new PlayerStateManager()
  ) {}

  getInput(): Promise<string> {
    this.describeLocation();
    console.log(`1. Move Forward.`);
    console.log(`2. Fight Boss.`);
    console.log(`3. Flee`);
    console.log(`4. Menu`);
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

  //Monster stuff//
  bossAlive: boolean = true;
  bossLife: number = 25;

  describeLocation(): void {
    console.log(`You are in dungeon room ${this.gsm.gs.currentLocation}.`);
    if (this.bossAlive) {
      console.log(`A HUGE boss monster blocks your path.`);
      if (this.bossLife >= 25) {
        console.log(
          `This monster is clearly a boss. He is huge. He looks healthy and hungry... meat hooks with chunks of prior dungeon delvers dangle from the ceiling. They rattle and sway as the boss breaths.`
        );
      } else if (this.bossLife < 10) {
        console.log(`He looks wounded... his foul breath is heavy.`);
      }
    } else {
      console.log("The boss monster lays dead on the floor.");
    }
  }

  private goForward(): void {
    if (this.bossAlive) {
      console.log(
        `The huge boss steps in front of you no matter how you try, you can't move forward while the boss still lives.`
      );
    } else {
      console.log(
        "With the monstrous creature dead, you have to squeeze past his stinking form and move into the next room."
      );
      this.gsm.gs.currentLocation++;
      ///If youve been to the next room before, dont itterate farthest yet.
      /// if you havent been to the next room before, this.gsm.gs.farthestRoom++
    }
  }

  private fightBoss(): void {
    if (this.bossAlive) {
      // console.clear();
      console.log(`You swing your sword at the gigantic creature.`);
      this.rollPlayerAttackDamage();
    } else {
      // console.clear();
      console.log(
        `The boss is already dead. You wrestle with your inner demons.`
      );
    }
  }

  rollPlayerAttackDamage(): void {
    let dmg: number = this.getRandomInt();
    if (dmg === 0) {
      console.log("Your sword missed the boss entirely!");
    } else if (dmg === 10) {
      console.log(
        `CRITICAL HIT! The boss takes ${dmg} points of damage! Will it be enough?`
      );
    } else {
      console.log(`Your sword connects for ${dmg} points of damage!`);
    }
    this.bossLife = this.bossLife - dmg;
    this.checkBossLifeStatus();
  }

  private checkBossLifeStatus(): void {
    if (this.bossLife > 0) {
      console.log(`the boss still has ${this.bossLife} health.`);
      this.rollBossAttackDamage();
    } else if (this.bossLife <= 0) {
      this.killBoss();
    }
  }

  private rollBossAttackDamage(): void {
    let dmg: number = this.getRandomInt() * 1.5;
    if (dmg === 0) {
      console.log(`The monster lashes out but misses you entirely!`);
      console.log('"GRAAAAAHHHH - MOUSE MAN QUICK!!!');
    } else if (dmg >= 10) {
      console.log(
        `The monster strikes you with astounding strength! You take ${dmg} points of damage!`
      );
      console.log('"GAAAKTUUUMBOORRRRrrrrr!"');
    } else {
      console.log('"rrrrAAAH!!');
      console.log(`The boss strikes you for ${dmg} points of damage!`);
    }
    this.psm.player.lifeTotal = this.psm.player.lifeTotal - dmg;
    // this.gsm.gs.playerLifeTotal = this.gsm.gs.playerLifeTotal - dmg;
    this.checkPlayerLifeStatus();
  }

  private checkPlayerLifeStatus(): void {
    let health = this.psm.player.lifeTotal;
    // let health = this.gsm.gs.playerLifeTotal;
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
      `YOU ARE DEAD. YOUR CORPSE IS HUNG FROM THE THE CHAINS ABOVE. THE BOSS LIKE'S HIS FOOD A LITTLE AGED BEFORE CONSUMPTION.`
    );
    console.log(`GAME OVER. INSERT 2 MORE COINS TO PLAY AGAIN.`);
    process.exit();
  }

  private killBoss(): void {
    this.bossAlive = false;
    console.log(
      "The monster lets out an agonized scream and crumples to the ground, dead. The way forward is clear."
    );
  }

  private getRandomInt(): number {
    return Math.floor(Math.random() * 11);
  }

  private flee(): void {
    console.log("BRL: You turn and run towards the exit like a coward.");
    this.gsm.gs.currentLocation = 0;
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.goForward();
        break;
      case "2":
        this.fightBoss();
        break;
      case "3":
        this.flee();
        break;
      case "4":
        this.gsm.gs.lastLocation = this.gsm.gs.currentLocation;
        this.gsm.gs.currentLocation = 9;
      // console.log(`Okay, goodbye.`);
      // this.gsm.gs.notDone = false;
      // process.exit();
      default:
        // this.getInput();
        return;
    }
  }
}
