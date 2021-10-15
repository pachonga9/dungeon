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
    // console.log(`DevComment: the monsterBlock is set to ${user.monsterBlock}`);
};

const getRandomInt = () => {
    return Math.floor(Math.random() * 10);
};

const collectGold = () => {
    let x = getRandomInt();
    user.gold = user.gold + x;
    console.log(`You pick up ${x} gold from the monster's corpse.`);
};

const killMonster = () => {
    // user.monsterBlock = !user.monsterBlock;
    user.monsterBlock = false;
    // console.log(`DevComment: the monsterBlock is set to ${user.monsterBlock}`);
    collectGold();
    console.log(`You now have ${user.gold} gold.`);
};

function fightMonster() {
    if(user.monsterBlock){
        console.clear();
        console.log(`You kill the monster. It crumples to the ground.`);
        killMonster();
        getInput();
    } else {
        console.clear();
        console.log(`There is no monster here to fight.`);
        getInput();
    }
};

function kickDoor() {
    if(user.monsterBlock){
        console.clear();
        console.log(`You can't move forward while a monster blocks your path.`);
        getInput();
    } else {
        console.clear();
        console.log('You kick down the door. A monster blocks your path.');
        user.location++;
        user.farthestRoom++;
        spawnMonster();
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
    if (user.location === 0) {
        return `You are outside the dungeon. You have ${user.gold} gold. You have travelled ${user.farthestRoom} floors.`;
    }
    return `You are in dungeon room #${user.location}`;
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
