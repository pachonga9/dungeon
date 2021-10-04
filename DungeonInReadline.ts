import { stdin, stdout } from 'process';
import * as readline from 'readline';
const rl = readline.createInterface({input: stdin, output: stdout});

var user = {
    location: [[`outside of the dungeon`],[`in dungeon room 1`]],
    choice: '',
    choices: [['1. Kick down the door'], ['2. Fight Monsters'], ['3. Run Away'], ['4. Exit Game']]
};


rl.question(`You are ${user.location[0]}. What would you like to do? `, function(){
    rl.setPrompt(`${user.choices.forEach(function(item){
        console.log(item);
    })}`);
    rl.prompt();
    // rl.on('line', function(input){
    //     user.choice.push(input.trim());
    // })
});
