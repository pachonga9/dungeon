export interface Consumable {
  name: string;
  qty: number;
  use: () => Promise<void>;
}
