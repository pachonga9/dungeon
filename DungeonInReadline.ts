////run this is newIndex.ts
import {stdin, stdout} from 'process';
import * as readline from 'readline';
const rl = readline.createInterface({input: stdin, output: stdout});
export class DungeonInReadline {

    constructor(){}


user = {
    location: 0,
    choices: ['1. Proceed', '2. Fight Monster', '3. Run Away', '4. Exit Game'],
    monsterBlock: false,
    gold: 0,
    farthestRoom: 0,
    didUserRun: false,
};

spawnMonster(): void {
    if (this.user.location === this.user.farthestRoom) {
        this.user.monsterBlock = true;
    }
    this.user.didUserRun = false; //resetting this value here is clever. you dont currently need or use the value but its cool.
};

getRandomInt(): number {
    return Math.floor(Math.random() * 10);
};

collectGold(): void {
    let x: number = this.getRandomInt();
    this.user.gold = this.user.gold + x;
    if (x === 0) {
        console.log(`you search the monster's filthy corpse, but find nothing of value.`);
    } else {
        console.log(`You search the monster's filthy corpse and find ${x} gold.`);
    }
};

killMonster(): void {
    this.user.monsterBlock = false;
    console.log('YOUR SWORD CONNECTS! The monster lets out an agonized scream and crumples to the ground, dead. The way forward is clear.');
    this.collectGold();
    console.log(`You have ${this.user.gold} gold.`);
};

fightMonster(): void {
    const isRoomOccupied: boolean = this.getIsRoomOccupied();
    if (isRoomOccupied) {
        console.clear();
        console.log(`You swing your sword at the monster.`);
        this.killMonster();
        this.getInput();
    } else {
        console.clear();
        console.log(`There is no monster here to fight. You wrestle with your inner demons.`);
        this.getInput();
    }
}

getIsPreviousRoom(): boolean {
    return this.user.location !== this.user.farthestRoom;
}

getIsRoomOccupied(): boolean {
    const isInPreviousRoom: boolean = this.getIsPreviousRoom();
    if (isInPreviousRoom) {
        return false;
    }
    return this.user.monsterBlock;
}

kickDoor(): void {
    const isMonsterInThisRoom: boolean = this.getIsRoomOccupied();
    if (isMonsterInThisRoom) {
        console.clear();
        console.log(`You can't move forward while the monster blocks your path.`);
        this.getInput();
        return;
    }

    const isInPreviousRoom: boolean = this.getIsPreviousRoom();
    if (isInPreviousRoom) {
        this.user.location++;
        console.clear();
        console.log('You have already kicked down this door. You move deeper into the dungeon.');
        console.log(`You check your map. You are in dungeon room ${this.user.location}. You have been here before.`);
        this.getInput();
        return;
    }

    this.user.location++;
    this.user.farthestRoom++;
    console.clear();
    console.log('You kick down the sturdy door in front of you. YOU MOVE UP ONE ROOM!');
    console.log(`You update your map with a diagram of dungeon room ${this.user.location}`);
    this.spawnMonster();
    this.getInput();
}

runAway(): void {
    if (this.user.location < 5) {
        console.clear();
        rl.question('Are you sure you want to flee? (y/n) ', function (answer: string) {
            if (answer === 'y') {
                console.log(`Your father was right about you. You aren't cut out for adventure.`);
                this.user.location = 0;
                this.user.didUserRun = true;
            }
            console.clear();
            this.getInput();
        });
    } else if (this.user.location >= 5) {
        console.clear();
        rl.question('Are you sure you would like to return to camp to rest? (y/n) ', function (answer: string) {
            if (answer === 'y') {
                console.log('You head back to camp.');
                this.user.location = 0;
            }
            console.clear();
            this.getInput();
        });
    }
}

handleAnswer(answer: string): void {
    switch (answer) {
        case '1':
            this.kickDoor();
            break;
        case '2':
            this.fightMonster();
            break;
        case '3':
            this.runAway();
            break;
        case '4':
            console.log(`Okay, goodbye.`)
            process.exit();
            return;
        default:
            this.getInput();
            return;
    }
}

describeLocation(): void {
    if (this.user.location === 0) {
        const message: string = `You are outside the dungeon. You have ${this.user.gold} gold. The farthest you have gone is room ${this.user.farthestRoom}.`;
        console.log(message);
        return;
    }
    const roomOccupied: boolean = this.getIsRoomOccupied();
    if (roomOccupied) {
        console.log('A monster blocks your path');
        return;
    }
    const isPreviousRoom: boolean = this.getIsPreviousRoom();
    if (isPreviousRoom) {
        console.log('A rotting corpse is on the ground.');
        return;
    }

    console.log('A fresh corpse is on the ground.');
}

getInput(): void {
    this.describeLocation();
    if (this.user.location === 0) {
        console.log(this.user.choices[0]);
        console.log(this.user.choices[3]);
    } else if (this.user.location < this.user.farthestRoom) {
        console.log(this.user.choices[0]);
        console.log(this.user.choices[2]);
        console.log(this.user.choices[3]);
    } else if (this.user.location === this.user.farthestRoom && this.user.monsterBlock) {
        console.log(this.user.choices[1]);
        console.log(this.user.choices[2]);
        console.log(this.user.choices[3]);
    } else if (this.user.location === this.user.farthestRoom && this.user.monsterBlock === false) {
        console.log(this.user.choices[0]);
        console.log(this.user.choices[2]);
        console.log(this.user.choices[3]);
    }
    rl.question('What would you like to do? ', function (answer: string){
        console.log(`You answered ${answer}`);
        this.handleAnswer(answer);
    });
}
start(): void {
console.clear();
console.log('Welcome to Dungeon Crawler\n');
this.getInput();
};
};