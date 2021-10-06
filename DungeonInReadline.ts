import {stdin, stdout} from 'process';
import * as readline from 'readline';

const rl = readline.createInterface({input: stdin, output: stdout});

const user = {
    location: 0,
    choices: ['1. Kick down the door', '2. Fight Monsters', '3. Run Away', '4. Exit Game'],
    monsterBlock: false,
};
const spawnMonster = () => {
    // user.monsterBlock = !user.monsterBlock;
    user.monsterBlock = true;
    console.log(`DevComment: the monsterBlock is set to ${user.monsterBlock}`);
}

const killMonster = () => {
    user.monsterBlock = !user.monsterBlock;
    console.log(`DevComment: the monsterBlock is set to ${user.monsterBlock}`);
}

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
        spawnMonster();
        getInput();
    }
};

function runAway() {
    console.clear();
    rl.question('Are you sure you want to flee? (y/n) ', function (answer) {
        if (answer === 'y') {
            console.log(`Your father was right about you. You aren't cut out for adventure.`);
            user.location = 0;
        }
        console.clear();
        getInput();
    });
}

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
}

function getLocation() {
    if (user.location === 0) {
        return 'You are outside the dungeon.';
    }
    return `You are in dungeon room #${user.location}`;
}

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
