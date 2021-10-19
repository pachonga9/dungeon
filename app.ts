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
        } else if (choice == '2'){
            console.clear();
            console.log(`The only monster here right now is your inability to make a propper decision. Make a different choice.`);
            console.log(gameStart());
        } else if (choice == '3'){
            console.clear();
            setTimeout(function() {
                console.log(`Your Father was right about you. You aren't cut out for adventure.`);
                setTimeout(function(){
                    console.log(`You head back to camp for the night and return in the morning.`);
                    setTimeout(function(){
                        console.log(gameStart());
                    }, 2000)
                }, 2000)
            }, 2000);
        } else if (choice == '4'){
            console.clear();
            console.log('Fine. Leave. See if I care.');
            //end loop
        };
}
let doorStanding = true;
let monsterIsAlive = true;
const room1 = () => {
    const killMonster = () => {
        monsterIsAlive = !monsterIsAlive;
    }
    const kickDoor = () => {
        doorStanding = !doorStanding;
    };
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
            } else if(doorStanding) {
            console.log('You kick down the door.');
            kickDoor();
            console.log(room1());
            } else {
                console.log(`You kick at nothing... I knew a boy like you in the old village. Chased the ducks around. "Touched", they called him.`)
                console.log(room1());
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
//mine2