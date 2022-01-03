import { Storable } from "./storable";

export class CoinPurse implements Storable {
  id: "coin-purse";
  label: "Coin Purse";

  gold: 1;
  silver: 10;
  copper: 0;
}
