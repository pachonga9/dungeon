interface PlayerState {
  lifeTotal: number;
}

export class Player implements PlayerState {
  lifeTotal = 100;
}
