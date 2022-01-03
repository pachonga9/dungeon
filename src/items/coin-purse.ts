import { Storable } from "./storable";

export class CoinPurse implements Storable {
  id = "coin-purse";
  label = "Coin Purse";
  gold = 1;
  silver = 10;
  copper = 0;

  describeCash(): string {
    return `${this.gold}g, ${this.silver}s, ${this.copper}c`;
  }
}
