/// npm run start
import promptSync from "prompt-sync";

console.log('Welcome to DUNGEON CRAWLER. Created by David Wyers.');

const gameStart = () => {
    console.log('You are outside of the dungeon.');
    console.log('What do you want to do?');
    console.log(`1. Kick Down Door`);
    console.log(`2. Fight Monsters`);
    console.log(`3. Run Away`);
    console.log(`4. End Game`);
    let choice: string = promptSync()('');
    if(choice == '1'){
        console.clear();
        console.log(`You kick in the door. A monster is here.`);
        console.log(room1());
        } 
        else if (choice == '2'){
            console.clear();
            console.log(`The only monster here right now is your inability to make a propper decision. Make a different choice.`);
            console.log(gameStart());
        } else if (choice == '3'){
            console.clear();
            setTimeout(function() {
            console.log(`your father was right about you. You arent cut out for adventure.`); 
            }, 1000);
            setTimeout(function() {
            console.log(`You head back to camp for the night and return in the morning.`); 
            }, 3000);
            setTimeout(function() {
            console.log(gameStart());
            }, 6000);
        } else if (choice == '4'){
            console.clear();
            console.log('Fine. Leave. See if I care.');
            //end loop
        };
};
gameStart();

const room1 = () => {
    let r1choice: string = promptSync()('');
    let monsterIsAlive: boolean;
    if(monsterIsAlive){
        console.log('You are in dungeon room 1. A monster blocks your path.');
    } else if (monsterIsAlive = !monsterIsAlive){
        console.log(`You are in dungeon room 1. A monster lies dead at your feet.`);
    }
    console.log('What do you want to do?');
    console.log(`1. Kick Down Door`);
    console.log(`2. Fight Monsters`);
    console.log(`3. Run Away`);
    console.log(`4. End Game`);
    if(r1choice == '1'){
        console.clear();
            if(monsterIsAlive){
            console.log(`You can't move forward until you kill the monster.`);
            console.log(room1());
            }else if(monsterIsAlive = !monsterIsAlive){
            console.log('You kick down the door.');
            }
        } 
        else if (r1choice == '2'){
            console.clear();
            if(monsterIsAlive){
                console.log(`You kill the monster. It crumples in a mass of stringy sinew and viscous blood.`);
                monsterIsAlive = !monsterIsAlive;
                console.log(room1());
            }else if(monsterIsAlive = !monsterIsAlive){
                console.log(`The monster is already dead. You wrestle with your inner demons.`);
                console.log(room1());
            }
            
        } else if (r1choice == '3'){
            console.clear();
            setTimeout(function() {
            console.log(`You fled the monster like a coward.`); 
            }, 1000);
            setTimeout(function() {
            console.log(`You head back to camp for the night and return in the morning.`); 
            }, 3000);
            setTimeout(function() {
            console.log(room1());
            }, 6000);
        } else if (r1choice == '4'){
            console.clear();
            console.log('Fine. Leave. See if I care.');
            //end loop
        };
};

// const name = promptSync()('What is your name?');
// console.log(`Hey there ${name}`);

// KNOWN BUGS: 
// A. If you run the game, and then select 1, an error is thrown saying room1 is not a function but
//    if you run the game, select 3. run away, and then select 1, the error is not shown but the function is still not running.
// B. Pretty sure my booleans won't work but I can't fix that until I fix the first bug.
