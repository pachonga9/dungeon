////run this is index.ts
import { stdin, stdout } from "process";
import * as readline from "readline";
import { Inventory } from "./inventory";
const inventory = new Inventory();

interface GameState {
  location: number;
  choices: string[];
  monsterBlock: boolean;
  monsterLifeTotal: number;
  gold: number;
  farthestRoom: number;
  playerLifeTotal: number;
}

export class DungeonInReadline {
  rl = readline.createInterface({ input: stdin, output: stdout });
  constructor() {}

  user: GameState = {
    location: 0,
    choices: [
      "1. Proceed",
      "2. Fight Monster",
      "3. Run Away",
      "4. Inventory",
      "5. Exit Game",
    ],
    monsterBlock: false,
    monsterLifeTotal: 0,
    gold: 0,
    farthestRoom: 0,
    playerLifeTotal: 50,
  };

  private spawnMonster(): void {
    if (this.user.location === this.user.farthestRoom) {
      this.user.monsterBlock = true;
      this.user.monsterLifeTotal = 10;
      console.log(
        `monster health points have been set to ${this.user.monsterLifeTotal}`
      );
    }
  }

  private getRandomInt(): number {
    return Math.floor(Math.random() * 11);
  }

  private collectGold(): void {
    let x: number = this.getRandomInt();
    this.user.gold = this.user.gold + x;
    if (x === 0) {
      console.log(
        `you search the monster's filthy corpse, but find nothing of value.`
      );
    } else {
      console.log(`You search the monster's filthy corpse and find ${x} gold.`);
    }
  }

  private collectTreasure(): void {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    let x = getRandomInt(10, 50);
    console.log(`You search the treasure room and find ${x} more gold coins.`);
    this.user.gold = this.user.gold + x;
  }

  private rollPlayerAttackDamage(): void {
    let dmg: number = this.getRandomInt();
    if (dmg === 0) {
      console.log("Your sword missed the monster entirely!");
    } else if (dmg === 10) {
      console.log(`CRITICAL HIT! The monster takes ${dmg} points of damage!`);
    } else {
      console.log(`Your sword connects for ${dmg} points of damage!`);
    }
    this.user.monsterLifeTotal = this.user.monsterLifeTotal - dmg;
    this.checkMonsterLifeStatus();
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
    this.user.playerLifeTotal = this.user.playerLifeTotal - dmg;
    this.checkPlayerLifeStatus();
  }

  private checkPlayerLifeStatus(): void {
    let health = this.user.playerLifeTotal;
    console.log(`Player Health: ${health}`);
    if (health <= 25 && health > 0) {
      console.log(`You are severely wounded!`);
      return;
    } else if (health <= 0) {
      this.killPlayer();
    }
  }

  private checkMonsterLifeStatus(): void {
    if (this.user.monsterLifeTotal > 0) {
      console.log(
        `the monster still has ${this.user.monsterLifeTotal} health.`
      );
      this.rollMonsterAttackDamage();
    } else if (this.user.monsterLifeTotal <= 0) {
      this.killMonster();
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
    const treasureRoom: boolean = this.getIsRoomTreasureRoom();
    this.user.monsterBlock = false;
    console.log(
      "The monster lets out an agonized scream and crumples to the ground, dead. The way forward is clear."
    );
    this.collectGold();
    if (treasureRoom) {
      this.collectTreasure();
    }
    console.log(`You have ${this.user.gold} gold.`);
  }

  private fightMonster(): void {
    const isRoomOccupied: boolean = this.getIsRoomOccupied();
    if (isRoomOccupied) {
      console.clear();
      console.log(`You swing your sword at the monster.`);
      this.rollPlayerAttackDamage();
      this.getInput();
    } else {
      console.clear();
      console.log(
        `There is no monster here to fight. You wrestle with your inner demons.`
      );
      this.getInput();
    }
  }

  private getIsPreviousRoom(): boolean {
    return this.user.location !== this.user.farthestRoom;
    ///true or false? the place you are at now is different than the farthest place you've ever been.
  }

  private getIsRoomOccupied(): boolean {
    const isInPreviousRoom: boolean = this.getIsPreviousRoom();
    if (isInPreviousRoom) {
      return false;
    }
    return this.user.monsterBlock;
  }

  private kickDoor(): void {
    const isMonsterInThisRoom: boolean = this.getIsRoomOccupied();
    if (isMonsterInThisRoom) {
      console.clear();
      console.log(`You can't move forward while the monster blocks your path.`); //player is not presented with this option//
      this.getInput();
      return;
    }

    const isInPreviousRoom: boolean = this.getIsPreviousRoom();
    if (isInPreviousRoom) {
      this.user.location++;
      console.clear();
      console.log(
        "You have already kicked down this door. You move deeper into the dungeon."
      );
      console.log(
        `You check your map. You are in dungeon room ${this.user.location}. You have been here before.`
      );
      this.getInput();
      return;
    }

    this.user.location++;
    this.user.farthestRoom++;
    console.clear();
    console.log(
      "You kick down the sturdy door in front of you. YOU MOVE UP ONE ROOM!"
    );
    console.log(
      `You update your map with a diagram of dungeon room ${this.user.location}`
    );
    this.spawnMonster();
    this.getInput();
  }

  private runAway(): void {
    if (this.user.location < 5) {
      console.clear();
      this.rl.question(
        "Are you sure you want to flee? (y/n) ",
        (answer: string): void => {
          if (answer === "y") {
            console.log(
              `Your father was right about you. You aren't cut out for adventure.` //FIX ME: This clears before the player can see it.
            );
            this.user.location = 0;
          }
          console.clear();
          this.getInput();
        }
      );
    } else if (this.user.location >= 5) {
      console.clear();
      this.rl.question(
        "Are you sure you would like to return to camp to rest? (y/n) ",
        (answer: string): void => {
          if (answer === "y") {
            console.log("You head back to camp.");
            this.user.location = 0;
          }
          console.clear();
          this.getInput();
        }
      );
    }
  }

  private openInventory(): void {
    let hPotName: string = inventory.inventory.potions.potionOfHealth.name;
    let hPotQty: number = inventory.inventory.potions.potionOfHealth.qty;
    console.log("You open your inventory.");
    console.log(`You have ${hPotQty} ${hPotName}`);
    if (hPotQty > 0) {
      this.rl.question(
        `Would you like to consume ${hPotName}?  (y/n) `,
        (answer: string): void => {
          console.log(`You answered ${answer}`);
          this.handleInventoryAnswer(answer);
        }
      );
    } else if (hPotQty <= 0) {
      console.log(`You don't have any ${hPotName} left`);
      this.getInput();
    }
  }

  private useHealthPotion(): void {
    console.log(
      `You drink that drank. Feelz good bruh. Your health goes up 10 points.`
    );
    this.user.playerLifeTotal += 10;
    inventory.inventory.potions.potionOfHealth.qty -= 1;
    this.getInput();
  }

  private handleInventoryAnswer(answer: string): void {
    switch (answer) {
      case "y":
        this.useHealthPotion();
        break;
      case "n":
        this.getInput();
        break;
      default:
        this.getInput();
        return;
    }
  }

  private handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.kickDoor();
        break;
      case "2":
        this.fightMonster();
        break;
      case "3":
        this.runAway();
        break;
      case "4":
        this.openInventory();
        break;
      case "5":
        console.log(`Okay, goodbye.`);
        process.exit();
        return; ///I left this useless return here for nostalgic purposes.
      default:
        this.getInput();
        return;
    }
  }

  private getIsRoomTreasureRoom(): boolean {
    let room = this.user.location;
    if (room % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }

  private describeLocation(): void {
    if (this.user.location === 0) {
      const message: string = `You are outside the dungeon. You have ${this.user.playerLifeTotal} health. You have ${this.user.gold} gold. The farthest you have gone is room ${this.user.farthestRoom}.`;
      console.log(message);
      return;
    }
    const treasureRoom: boolean = this.getIsRoomTreasureRoom();
    const roomOccupied: boolean = this.getIsRoomOccupied();
    if (roomOccupied) {
      console.log("A monster blocks your path.");
      if (this.user.monsterLifeTotal === 10) {
        console.log("He looks healthy.");
      } else if (this.user.monsterLifeTotal < 10) {
        console.log("He looks wounded.");
      }
      if (treasureRoom) {
        console.log("The glint of treasures catch your eye.");
      }
      return;
    }
    const isPreviousRoom: boolean = this.getIsPreviousRoom();
    if (isPreviousRoom) {
      console.log("A rotting corpse is on the ground.");
      return;
    }

    console.log("A fresh corpse is on the ground.");
  }

  private getInput(): void {
    this.describeLocation();
    if (this.user.location === 0) {
      console.log(this.user.choices[0]);
      console.log(this.user.choices[3]);
      console.log(this.user.choices[4]);
    } else if (this.user.location < this.user.farthestRoom) {
      console.log(this.user.choices[0]);
      console.log(this.user.choices[2]);
      console.log(this.user.choices[3]);
      console.log(this.user.choices[4]);
    } else if (
      this.user.location === this.user.farthestRoom &&
      this.user.monsterBlock
    ) {
      console.log(this.user.choices[1]);
      console.log(this.user.choices[2]);
      console.log(this.user.choices[3]);
      console.log(this.user.choices[4]);
    } else if (
      this.user.location === this.user.farthestRoom &&
      this.user.monsterBlock === false
    ) {
      console.log(this.user.choices[0]);
      console.log(this.user.choices[2]);
      console.log(this.user.choices[3]);
      console.log(this.user.choices[4]);
    }
    this.rl.question("What would you like to do? ", (answer: string): void => {
      console.log(`You answered ${answer}`);
      this.handleAnswer(answer);
    });
  }
  start(): void {
    console.clear();
    console.log("Welcome to Dungeon Crawler\n");
    this.getInput();
  }
}
