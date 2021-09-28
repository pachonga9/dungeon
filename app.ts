import promptSync from "prompt-sync";
export class App {

  constructor(){
  }


  run = () => {
console.log('Welcome to DUNGEON CRAWLER. Created by David Wyers.');

    const getDecision = () => {
    console.log(`What do you want to do?`);
    console.log(`1. Kick Down Door`);
    console.log(`2. Fight Monsters`);
    console.log(`3. Run Away`);
    console.log(`4. End Game`);
    let choice: string = promptSync()('');
    return choice;
    };

    const gameStart = () => {
    console.log('You are outside of the dungeon.');
    let choice = getDecision();
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
}
let monsterIsAlive = true;
const room1 = () => {
    const killMonster = () => {
        monsterIsAlive = !monsterIsAlive;
    }
    if(monsterIsAlive){
        console.log('You are in dungeon room 1. A monster blocks your path.');
    } else {
        console.log(`You are in dungeon room 1. A monster lies dead at your feet.`);
    }
    let choice = getDecision();
    if(choice == '1'){
        console.clear();
            if(monsterIsAlive){
            console.log(`You can't move forward until you kill the monster.`);
            console.log(room1());
            } else {
            console.log('You kick down the door.');
            }
        } 
        else if (choice == '2'){
            console.clear();
            if(monsterIsAlive){
                console.log(`You kill the monster. It crumples in a mass of stringy sinew and viscous blood.`);
                //do some monster is dead logic
                killMonster();
                console.log(room1());
            } else {
                console.log(`The monster is already dead. You wrestle with your inner demons.`);
                console.log(room1());
            }
            
        } else if (choice == '3'){
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
        } else if (choice == '4'){
            console.clear();
            console.log('Fine. Leave. See if I care.');
            //end loop
        };
};
gameStart();
}
}
//mine