import { Location } from "../location";
import { GameStateManager } from "../game-state-manager";
import { stdin, stdout } from "process";
import * as readline from "readline";
import { Console } from "console";

export class TreasureRoom implements Location {
  constructor(
    private readonly rl = readline.createInterface({
      input: stdin,
      output: stdout,
    }),
    private readonly gsm = new GameStateManager()
  ) {}

  getInput(): Promise<string> {
    this.describeLocation();
    console.log(`1. Move Forward.`);
    console.log(`2. Stuff your Pockets.`);
    console.log(`3. Flee`);
    console.log(`4. Menu`);
    return new Promise((resolve, reject) => {
      this.rl.question(
        "What would you like to do? ",
        (answer: string): void => {
          console.log(`You answered ${answer}`);
          resolve(answer);
        }
      );
    });
  }

  describeLocation(): void {
    console.log(`You are in dungeon room ${this.gsm.gs.currentLocation}.`);
    console.log("GASP!");
    console.log(
      `Vast treasures are arranged in piles about the floor. Podiums with relics of the gods gleem upon them. Diamond crowns. Emerald diadems. Gold coins stacked in gleaming piles reflect your torchlight. A brand new Xbox Series X beckons you.`
    );
    console.log(`'Is it possible? Could it be this easy? you think.'`);
  }

  private goForward(): void {
    console.log(
      `You decide to leave the treasures alone for now... Something ominous hangs about the air.`
    );
    console.log("With the monster dead, you move into the next room.");
    this.gsm.gs.currentLocation++;
  }

  private grabTreasure(): void {
    console.log(
      "You stuff your pockets. The gold is heavy. Your trowsers sag as the pockets billow out threatening to burst."
    );
    console.log(
      `The jewels! THE JEWELS TOO! You grab so much that your bag is practically bursting. You'll have to make many trips you think.`
    );
    console.log(
      `As you turn for the door...the...door. It's gone! It was right there. Perhaps I was just turned around.`
    );
    console.log(
      `You blink sand from your eyes. A strange sensation tickles down your legs and into your boots...sand.`
    );
    console.log(
      `"What?" Sand trickles out of the holes in your pockets. You rip your bag off and look inside. Where once there was treasure, sand remains.`
    );
    console.log(`"No. No no no. This can't be! WHAT IS THIS SCORCERY!?"`);
    console.log(
      "Sand begins to cascade from the piles of the ellusive treasure piles, buring them, evaporating them into - yet - more sand."
    );
    this.killPlayer();
  }

  private killPlayer(): void {
    console.log(
      `Your torch begins to fade in the endless streams of sand. You wade quick as you can from wall to wall scratching at the alabaster until your fingers bleed.`
    );
    console.log(
      `The sand seems to rise from the very floor. Rain from the very ceiling. Pour from your very nose.`
    );
    console.log(
      "You try to scream but the grit fills your mouth and tongue. Darkness. Crushing, gritty darkness..."
    );
    console.log(`GAME OVER. INSERT 2 MORE COINS TO CONTINUE.`);
    process.exit();
  }

  private flee(): void {
    console.log("TRL: You turn and run towards the exit like a coward.");
    this.gsm.gs.currentLocation = 0;
  }

  handleAnswer(answer: string): void {
    switch (answer) {
      case "1":
        this.goForward();
        break;
      case "2":
        this.grabTreasure();
        break;
      case "3":
        this.flee();
        break;
      case "4":
        this.gsm.gs.lastLocation = this.gsm.gs.currentLocation;
        this.gsm.gs.currentLocation = 9;
      // console.log(`Okay, goodbye.`);
      // this.gsm.gs.notDone = false;
      // process.exit();
      default:
        // this.getInput();
        return;
    }
  }
}
