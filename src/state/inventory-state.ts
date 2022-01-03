import { GameState } from "./game-state";
import { GameStateManager } from "./game-state-manager";
import { GameStateType } from "./game-state-type";

export class InventoryGameState implements GameState {
  constructor(private readonly gsm: GameStateManager) {}

  gold: number = 10;

  // minPotOfHealth: Consumable = {
  //   name: "Minor Potion of Healing",
  //   qty: 1,
  //   use = () =>{

  //   }
  // };

  // majPotOfHealth: Storable = {
  //   name: "Major Potion of Healing",
  //   qty: 1,
  // };

  run = async (): Promise<void> => {
    console.log("Inventory-state: Hi, This is the inventory.");

    const answer = await this.getInput();

    this.handleAnswer(answer);
  };

  getInput(): Promise<string> {
    console.log(`1. Go Back`);
    console.log(`2. Coin Purse`);
    console.log(`3. Potions`);
    console.log(`4. Equipment`);
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

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.gsm.moveToState(GameStateType.menu);
        break;
      case "2":
        console.clear();
        console.log(`You have ${this.gold} gold.`);
        break;
      case "3":
        console.clear();
        console.log(`This is where potion catagories should be shown.`);
        break;
      case "4":
        console.clear();
        console.log(`This is where equipment stuff will be shown.`);
        break;
      default:
        return;
    }
  }
  // potions: {
  //   potionOfHealth: {
  //     name: "potion of Health";
  //     qty: 3;
  //   };
  //   antidote: {
  //     name: "Antidote";
  //     qty: 1;
  //   };
  // };
  // weapons: {
  //   rustyIronDagger: {
  //     name: "Rusty Iron Dagger";
  //     baseAttack: 1;
  //     maxAttack: 10;
  //     qty: 1;
  //   };
  // };
}
