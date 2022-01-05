import { GameStateManager } from "../state/game-state-manager";
import { CoinPurse } from "./coin-purse";
import { IronSword } from "./iron-sword";
import { ItemType } from "./item-type";
import { MinorHealthPotion } from "./minor-health-potion";
import { Storable } from "./storable";
import { WoodSword } from "./wood-sword";

export class Inventory {
  private readonly bag = new Map<ItemType, Storable[]>();

  constructor(private readonly gsm: GameStateManager) {
    const ironSword = new IronSword(this.gsm);
    const woodSword = new WoodSword(this.gsm);
    const coinPurse = new CoinPurse();
    const minorHealthPotion = new MinorHealthPotion(this.gsm);
    this.bag.set(ItemType.IronSword, [ironSword]);
    this.bag.set(ItemType.WoodSword, [woodSword]);
    this.bag.set(ItemType.CoinPurse, [coinPurse]);
    this.bag.set(ItemType.MinorHealthPotion, [minorHealthPotion]);
  }

  getFirst<T>(key: ItemType): T {
    const raw = this.bag.get(key);
    const storables = raw as unknown as T[];
    return storables[0];
  }

  getItems<T>(key: ItemType): T[] {
    const storables = this.bag.get(key);
    return storables as unknown as T[];
  }

  addItem(key: ItemType, item: Storable): void {
    this.addItems(key, [item]);
  }

  addItems(key: ItemType, items: Storable[]): void {
    const exists = this.bag.has(key);
    //do we already have items of this type?
    if (exists) {
      //if yes, add to existing collection
      const collection = this.bag.get(key); // Storable[]
      collection.push(...items);
    } else {
      //if not, create a new collection
      this.bag.set(key, items);
    }
  }
}
