import { Game } from "./src/game";

const game = new Game();
(async () => {
  await game.start();
  process.exit();
})();