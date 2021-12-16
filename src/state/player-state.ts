interface PlayerState {
  lifeTotal: number;
  currentRoom: number;
  farthestRoom: number;
  lastRoom: number;
}

export class Player implements PlayerState {
  lifeTotal = 100;
  currentRoom = 0;
  farthestRoom = 0;
  lastRoom = 0;
}
