import {stdin, stdout} from 'process';
import * as readline from 'readline';

const rl = readline.createInterface({input: stdin, output: stdout});

const user = {
    location: 0,
    choices: ['1. Proceed', '2. Fight Monster', '3. Run Away', '4. Exit Game'],
    monsterBlock: false,
    gold: 0,
    farthestRoom: 0,
    didUserRun: false,
};

function spawnMonster(): void {
    if (user.location === user.farthestRoom) {
        user.monsterBlock = true;
    }
    user.didUserRun = false; //resetting this value here is clever. you dont currently need or use the value but its cool.
};

function getRandomInt(): number {
    return Math.floor(Math.random() * 10);
};

function collectGold(): void {
    let x: number = getRandomInt();
    user.gold = user.gold + x;
    if (x === 0) {
        console.log(`you search the monster's filthy corpse, but find nothing of value.`);
    } else {
        console.log(`You search the monster's filthy corpse and find ${x} gold.`);
    }
};

function killMonster(): void {
    user.monsterBlock = false;
    console.log('YOUR SWORD CONNECTS! The monster lets out an agonized scream and crumples to the ground, dead. The way forward is clear.');
    collectGold();
    console.log(`You have ${user.gold} gold.`);
};

function fightMonster(): void {
    const isRoomOccupied: boolean = getIsRoomOccupied();
    if (isRoomOccupied) {
        console.clear();
        console.log(`You swing your sword at the monster.`);
        killMonster();
        getInput();
    } else {
        console.clear();
        console.log(`There is no monster here to fight. You wrestle with your inner demons.`);
        getInput();
    }
}

function getIsPreviousRoom(): boolean {
    return user.location !== user.farthestRoom;
}

function getIsRoomOccupied(): boolean {
    const isInPreviousRoom: boolean = getIsPreviousRoom();
    if (isInPreviousRoom) {
        return false;
    }
    return user.monsterBlock;
}

function kickDoor(): void {
    const isMonsterInThisRoom: boolean = getIsRoomOccupied();
    if (isMonsterInThisRoom) {
        console.clear();
        console.log(`You can't move forward while the monster blocks your path.`);
        getInput();
        return;
    }

    const isInPreviousRoom: boolean = getIsPreviousRoom();
    if (isInPreviousRoom) {
        user.location++;
        console.clear();
        console.log('You have already kicked down this door. You move deeper into the dungeon.');
        console.log(`You check your map. You are in dungeon room ${user.location}. You have been here before.`);
        getInput();
        return;
    }

    user.location++;
    user.farthestRoom++;
    console.clear();
    console.log('You kick down the sturdy door in front of you. YOU MOVE UP ONE ROOM!');
    console.log(`You update your map with a diagram of dungeon room ${user.location}`);
    spawnMonster();
    getInput();
}

function runAway(): void {
    if (user.location < 5) {
        console.clear();
        rl.question('Are you sure you want to flee? (y/n) ', function (answer: string) {
            if (answer === 'y') {
                console.log(`Your father was right about you. You aren't cut out for adventure.`);
                user.location = 0;
                user.didUserRun = true;
            }
            console.clear();
            getInput();
        });
    } else if (user.location >= 5) {
        console.clear();
        rl.question('Are you sure you would like to return to camp to rest? (y/n) ', function (answer: string) {
            if (answer === 'y') {
                console.log('You head back to camp.');
                user.location = 0;
            }
            console.clear();
            getInput();
        });
    }
}

function handleAnswer(answer: string): void {
    switch (answer) {
        case '1':
            kickDoor();
            break;
        case '2':
            fightMonster();
            break;
        case '3':
            runAway();
            break;
        case '4':
            console.log(`Okay, goodbye.`)
            process.exit();
            return;
        default:
            getInput();
            return;
    }
}

function describeLocation(): void {
    if (user.location === 0) {
        const message: string = `You are outside the dungeon. You have ${user.gold} gold. The farthest you have gone is room ${user.farthestRoom}.`;
        console.log(message);
        return;
    }
    const roomOccupied: boolean = getIsRoomOccupied();
    if (roomOccupied) {
        console.log('A monster blocks your path');
        return;
    }
    const isPreviousRoom: boolean = getIsPreviousRoom();
    if (isPreviousRoom) {
        console.log('A rotting corpse is on the ground.');
        return;
    }

    console.log('A fresh corpse is on the ground.');
}

function getInput(): void {
    describeLocation();
    if (user.location === 0) {
        console.log(user.choices[0]);
        console.log(user.choices[3]);
    } else if (user.location < user.farthestRoom) {
        console.log(user.choices[0]);
        console.log(user.choices[2]);
        console.log(user.choices[3]);
    } else if (user.location === user.farthestRoom && user.monsterBlock) {
        console.log(user.choices[1]);
        console.log(user.choices[2]);
        console.log(user.choices[3]);
    } else if (user.location === user.farthestRoom && user.monsterBlock === false) {
        console.log(user.choices[0]);
        console.log(user.choices[2]);
        console.log(user.choices[3]);
    }
    rl.question('What would you like to do? ', function (answer: string) {
        console.log(`You answered ${answer}`);
        handleAnswer(answer);
    });
}

console.clear();
console.log('Welcome to Dungeon Crawler\n');
getInput();