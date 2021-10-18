import {stdin, stdout} from 'process';
import * as readline from 'readline';

const rl = readline.createInterface({input: stdin, output: stdout});

const user = {
    location: 0,
    choices: ['1. Kick down the door', '2. Fight Monsters', '3. Run Away', '4. Exit Game'],
    monsterBlock: false,
    gold: 0,
    farthestRoom: 0,
};

const spawnMonster = () => {
    // user.monsterBlock = !user.monsterBlock;
    user.monsterBlock = true;
    console.log('A MONSTER SPAWNED IN FRONT OF YOU AND BLOCKS YOUR PATH!')
    // console.log('A monster just spawned.');
    // console.log(`DevComment: the monsterBlock is set to ${user.monsterBlock}`);
};

const getRandomInt = () => {
    return Math.floor(Math.random() * 10);
};

const collectGold = () => {
    let x = getRandomInt();
    user.gold = user.gold + x;
    if(x === 0){
        console.log(`you search the monster's filfthy corpse, but find nothing of value.`);
    } else {
        console.log(`You search the monster's filfthy corpse and find ${x} gold.`);
    }
};

const killMonster = () => {
    // user.monsterBlock = !user.monsterBlock;
    user.monsterBlock = false;
    // console.log(`DevComment: the monsterBlock is set to ${user.monsterBlock}`);
    console.log('YOUR SWORD CONNECTS! The monster lets out an agonized scream and crumples to the ground, dead. The way forward is clear.');
    collectGold();
    console.log(`You have ${user.gold} gold.`);
};

function fightMonster() {
    if(user.monsterBlock){ // THIS IS TRUE
        console.clear();
        console.log(`You swing your sword at the monster.`);
        killMonster();
        getInput();
    } else {
        console.clear();
        console.log(`There is no monster here to fight. You wrestle with your inner demons.`);
        getInput();
    }
};

function kickDoor() {
    if(user.monsterBlock){ // THIS IS TRUE
        console.clear();
        console.log(`You can't move forward while the monster blocks your path.`);
        getInput();
    } else if(user.location >= user.farthestRoom){ // if the current location greater than or equal to the farthest room...
        console.clear();
        console.log('You kick down the sturdy door in front of you. YOU MOVE UP ONE ROOM!');
        user.location++;
        logFarthestRoom();
        console.log(`the farthest room you have travelled is to room ${user.farthestRoom}.`);
        // spawnMonster();
        getInput();
    } else if(user.location <= user.farthestRoom ){ // if the current location is less than or equal to fathest room...
        console.clear();
        console.log('You have already kicked down this door. You move deeper into the dungeon.');
        console.log(`A rotting corpse of a monster lay dead on the floor.`);
        user.location++;
        logFarthestRoom();
        console.log(`The farthest room you have travelled is to room ${user.farthestRoom}.`);
        getInput();
    }
};

function runAway() {
    if (user.location < 5){
    console.clear();
        rl.question('Are you sure you want to flee? (y/n) ', function (answer) {
            if (answer === 'y') {
                console.log(`Your father was right about you. You aren't cut out for adventure.`);
                user.location = 0;
            }
            console.clear();
            getInput();
        });
    } else if (user.location >= 5){
        console.clear();
        rl.question('Are you sure you would like to return to camp to rest? (y/n) ', function (answer) {
            if (answer === 'y') {
                console.log('You head back to camp.');
                user.location = 0;
            }
            console.clear();
            getInput();
        });
    }
};

function handleAnswer(answer: string) {
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
        default:
            getInput();
    }
};

function isLocationFive() {
    if (user.location >= 5) {
        user.choices.splice(2, 1, '3. Return to Camp');
    } else if (user.location < 5) {
        user.choices.splice(2, 1, '3. Run Away');
        /// This seems kinda weird if I don't add the Run Away option again...
    }
};

function getLocation() {
    isLocationFive();
    if (user.location === 0) { ///try changing this to just =
        return `You are outside the dungeon. You have ${user.gold} gold. The farthest you have gone is room ${user.farthestRoom}.`;
    }
    return `You are in dungeon room #${user.location}`;
};

function logFarthestRoom() {
    console.log('You check your map...');
    if(user.location > user.farthestRoom){ // if the current location is greater than the furthest you have been...
        console.log(`You update your map with the new area.`);
        user.farthestRoom++;
        spawnMonster();
    }   else if(user.location <= user.farthestRoom){ // if the current location is less far as the furthest room...
            console.log(`Your are in dungeon room ${user.location}. You have been here before.`);
    }
};

const getInput = () => {
    const location = getLocation();
    console.log(location);
    user.choices.forEach((item) => console.log(item));
    rl.question('What would you like to do? ', function (answer) {
        console.log(`you answered ${answer}`);
        handleAnswer(answer);
    });
};

console.clear();
console.log('Welcome to Dungeon Crawler\n');
getInput();
