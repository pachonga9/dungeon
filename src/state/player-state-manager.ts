import { Player } from "./player-state";

export class PlayerStateManager {
  constructor(public readonly player = new Player()) {}
}
