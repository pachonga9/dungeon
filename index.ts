import { DungeonExperimental } from "./src/game";
const dungeonExperimental = new DungeonExperimental();
(async () => {
  await dungeonExperimental.start();
})();
