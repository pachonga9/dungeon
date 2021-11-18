import { stdin, stdout } from "process";
import * as readline from "readline";
// import { Inventory } from "./inventory";
// const inventory = new Inventory();

interface GameState {
  // location: number;
  // choices: string[];
  // monsterBlock: boolean;
  // monsterLifeTotal: number;
  // gold: number;
  // farthestRoom: number;
  // playerLifeTotal: number;
}

export class DungeonExperimental {
  rl = readline.createInterface({ input: stdin, output: stdout });
  constructor() {}

  player: GameState = {};
}
