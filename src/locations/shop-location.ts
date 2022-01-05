import { CoinPurse } from "../items/coin-purse";
import { ItemType } from "../items/item-type";
import { MinorHealthPotion } from "../items/minor-health-potion";
import { WoodSword } from "../items/wood-sword";
import { IronSword } from "../items/iron-sword";
import { GameStateManager } from "../state/game-state-manager";
import { GameStateType } from "../state/game-state-type";
import { DungeonLocation } from "./dungeon-location";

export class Shop implements DungeonLocation {
  constructor(private readonly gsm: GameStateManager) {}

  newInstance: boolean = true;

  getInput(): Promise<string> {
    console.log(`1. Peruse Wares.`);
    console.log(`2. Leave the Shop`);
    console.log(`3. Menu`);
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
    if (this.newInstance) {
      console.log(
        `SHOP: As you step inside the shop, a bell afixed to the door jingles.`
      );
      console.log(
        `A small dwarven man mumbles something about "...another one. hrrmmmm of coursemmm... Buy sum'n or leave.'`
      );
    } else {
      console.log("The shopkeeping dwarf grumbles...");
    }
  }

  private peruseWares(): void {
    const coinPurse = this.gsm.playerState.inventory.getFirst<CoinPurse>(
      ItemType.CoinPurse
    );
    console.log("you currently have: ", coinPurse.describeCash());

    this.newInstance = false;

    console.log(
      "the shop keeper says, hes too busy to deal with you and tosses you a potion"
    );
    const potion = new MinorHealthPotion(this.gsm);
    this.gsm.playerState.inventory.addItem(ItemType.MinorHealthPotion, potion);
    const potions = this.gsm.playerState.inventory.getItems<MinorHealthPotion>(
      ItemType.MinorHealthPotion
    ); //2 potions
    console.log("potion count", potions.length);
    const asdf = potions[0]; // first of the two
    asdf.use();
    console.log("potion servings", asdf.servings);

    console.log(
      `I guess you're probably wanting a weapon too. Here. Take this old broken broom sti- uh - I mean wooden sword.`
    );
    const sword = new WoodSword(this.gsm);
    this.gsm.playerState.inventory.addItem(ItemType.WoodSword, sword);
    // const swords = this.gsm.playerState.inventory.getItems<WoodSword>(ItemType.WoodSword);
    console.log("NEW WEAPON! You have been given a ", sword.label);
    console.log('"Go ahead an put equip it."');
    sword.equip();

    // console.log(
    //   "This is the part where you would peruse the wares of the shop..."
    // );
    // console.log(
    //   'The shopkeeper mumbles something about a "dev god not up to par with other gods" and "idiot devs not giving me s-- to hrmmm sell."'
    // );
    // console.log(`It may be best to come back later, you think.`);
  }

  private leaveShop(): void {
    this.newInstance = true;
    console.log(
      "SHOP: You leave the shop. The shopkeeper grumbles some more..."
    );
    this.gsm.playerState.currentRoomIndex = 0;
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        console.clear();
        this.peruseWares();
        break;
      case "2":
        console.clear();
        this.leaveShop();
        break;
      case "3":
        console.clear();
        this.gsm.moveToState(GameStateType.menu);
      default:
        return;
    }
  }
}
